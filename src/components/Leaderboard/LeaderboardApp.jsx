import React, { useEffect, useState } from "react";
import GlobeComp from "./GlobeComp";
import data from "./data";
import useInterval from "./useInterval";
import { getGroups, getTopThreeGroups, getGroupById } from "./dataLayer";
import Polygon from "./Polygon";
import RingAnimation from "./RingAnimation";
import Leaderboard from "./Leaderboard";
import ConnectedBots from "./ConnectedBots";
import NoSSR from "./NoSSR";
import "./Reset.css";

const LeaderboardApp = () => {
  const [arcsData, setArcsData] = useState([]);
  const [connectedAmount, setConnectedAmount] = useState(0);
  const [topThreeGroups, setTopThreeGroups] = useState([]);

  const loadGroups = async () => {
    const groups = await getGroups();
    setArcsData(data.slice(0, groups.length ? groups.length : 0));
    setConnectedAmount(groups.length ? groups.length : 0);
  };

  const loadTopThree = async () => {
    const groups = await getTopThreeGroups();
    const combinedGroupsData = await Promise.all(
      groups.map(async (group) => {
        const groupData = await getGroupById(group.group_id);
        return {
          ...groupData,
          points: group.total_points,
        };
      })
    );
    setTopThreeGroups(combinedGroupsData);
  };

  useEffect(() => {
    loadGroups();
  }, []);

  useEffect(() => {
    loadTopThree();
  }, []);

  useInterval(async () => {
    await loadGroups();
    await loadTopThree();
  }, 60000);

  return (
    <div style={{ width: "100vw", height: "100vh", backgroundColor: "#000" }}>
      <NoSSR>
        <Polygon />
        <GlobeComp initialArcsData={arcsData} />
        <RingAnimation />
        <Leaderboard topThreeGroups={topThreeGroups} />
        <ConnectedBots initialConnectedAmount={connectedAmount} />
      </NoSSR>
    </div>
  );
};

export default LeaderboardApp;
