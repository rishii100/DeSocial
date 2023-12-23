import UserInfo from "./UserInfo";

function RightSidebar() {
  return (
    <div className="right-sidebar-container">
      <h6 className="right-sidebar-heading">Suggestions</h6>
      <UserInfo Address="0x283AF9a230E74beFdfdadd6fBc113B71DF55e817" />
      <UserInfo Address="0x8EcB5056aD2Bdf463533D75559bD2A763ba22335" />
      <UserInfo Address="0x41fDBAAcAA6E2beb48cc7e279f39818Bd48770d6" />
    </div>
  );
}
export default RightSidebar;
