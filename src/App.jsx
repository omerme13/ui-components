import styles from "./App.module.scss";
import Button from "./components/Button/Button";

function App() {
    return (
        <>
            <div className={styles.container}>This is the app</div>
            <Button>My Button</Button>
        </>
    );
}

export default App;
