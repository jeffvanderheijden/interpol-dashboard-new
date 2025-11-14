const Unauthorized = () => {
    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "transparent",
                zIndex: 9999,
                fontFamily: "var(--font-w95, Arial, sans-serif)",
            }}
        >
            <div
                style={{
                    backgroundColor: "#c3c7cb",
                    border: "2px solid #000",
                    padding: "32px",
                    width: "420px",
                    borderRadius: "4px",
                    boxShadow: "4px 4px 0px #000",
                    textAlign: "center",
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
                    🔒 401: Unauthorized
                </h1>

                <p style={{ fontSize: "14px", marginTop: "12px" }}>
                    Je bent niet geautoriseerd om deze pagina te bekijken.
                </p>
            </div>
        </div>
    );
};

export default Unauthorized;
