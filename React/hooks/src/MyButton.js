function MyButton({count, onClick}) {
    return (
        <>
            <button onClick={onClick}>
                Butona {count} kez tıklandın
            </button>
        </>
    );
}

export default MyButton;