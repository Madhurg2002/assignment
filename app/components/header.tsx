import Clock from "./clock";  
export default function Header() {
  return (
    <>
      <Clock />
      <div className="flex justify-between  pt-16 pb-4">
        <img
          className="h-10"
          src="http://okay.jkgame.vip/web_game/caesarskingdom_pc/assets/logo.fbda5502.png"
          alt="Caesars Kingdom"
        />
        <div className="flex items-center justify-center gap-4">
          <button className="w-20 rounded-md bg-amber-600">Login</button>
          <button className="w-20 rounded-md bg-amber-600">Sign Up</button>
        </div>
      </div>
      <div className="flex items-center justify-between divide-x divide-gray-400 text-lg font-semibold gap-8 ">
        <div className="flex-1 text-center">Home</div>
        <div className="flex-1 text-center">Lobby</div>
        <div className="flex-1 text-center">Favorite</div>
        <div className="flex-1 text-center">Fishing</div>
        <div className="flex-1 text-center">Slot</div>
        <div className="flex-1 text-center">Other</div>
        <div className="flex-1 text-center">Share</div>
        <div className="flex-2 text-center">
          <div className="flex items-center justify-normal">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="20"
              height="20"
              viewBox="0,0,256,256"
            >
              <g
                fill-opacity="1"
                fill="#ffffff"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
              >
                <g transform="scale(5.12,5.12)">
                  <path d="M21,3c-9.37891,0 -17,7.62109 -17,17c0,9.37891 7.62109,17 17,17c3.71094,0 7.14063,-1.19531 9.9375,-3.21875l13.15625,13.125l2.8125,-2.8125l-13,-13.03125c2.55469,-2.97656 4.09375,-6.83984 4.09375,-11.0625c0,-9.37891 -7.62109,-17 -17,-17zM21,5c8.29688,0 15,6.70313 15,15c0,8.29688 -6.70312,15 -15,15c-8.29687,0 -15,-6.70312 -15,-15c0,-8.29687 6.70313,-15 15,-15z"></path>
                </g>
              </g>
            </svg>
            <input
              className="w-40 rounded-md bg-amber-800"
              placeholder="Search games"
            />
          </div>
        </div>
      </div>
    </>
  );
}
