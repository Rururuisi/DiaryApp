import React, { useContext } from "react";
import Interface from "./Interface";
import AppEntrance from "./entrance/AppEntrance";
import { UserContext } from "./contexts/UserContextProvider";

function Entrance() {
	const { isAuth } = useContext(UserContext);

	return (
		<>
			{!isAuth ? (
				<AppEntrance />
			) : (
				<div className='App'>
					<Interface />
				</div>
			)}
		</>
	);
}

export default Entrance;
