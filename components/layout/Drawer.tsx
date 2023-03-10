import Link from "next/link";

export default function Drawer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="drawer drawer-mobile bg-base-300">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content bg-base-100">
        {children}
      </div>
      <div className="drawer-side ">
        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-300 text-base-content border-base-300 border-2 shadow-lg">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
