const NotFound = () => {
    return (
        <div
            style={{
                backgroundColor: "#c3c7cb",
                border: "2px solid #000",
                padding: "32px",
                width: "420px",
                margin: "100px auto",
                borderRadius: "4px",
                boxShadow: "4px 4px 0px #000",
                fontFamily: "var(--font-w95, Arial, sans-serif)",
                textAlign: "center"
            }}
        >
            <h1
                style={{
                    fontSize: "22px",
                    marginBottom: "12px",
                    paddingBottom: "8px",
                    borderBottom: "2px solid #000",
                    fontWeight: "bold",
                }}
            >
                ❌ 404: File not Found
            </h1>

            <p style={{ fontSize: "14px", marginTop: "12px" }}>
                De pagina of het bestand dat je zoekt bestaat niet.
            </p>
        </div>
    );
};

export default NotFound;
