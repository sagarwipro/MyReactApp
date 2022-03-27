import MainNavBar from "./MainNavBar";
import classes from "./layout.module.css";
export default function Layout(props) {
  return (
    <div>
      <MainNavBar />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}
