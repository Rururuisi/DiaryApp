import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContextProvider";

function PhotoLibrary() {
	const { user } = useContext(UserContext);

	return <div></div>;
}

export default PhotoLibrary;
