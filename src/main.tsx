import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory, withRouter } from "react-router-dom";
import { Logout, getProfile } from "./apis/session/session.handler";
import store from "./apis/store";

const isLoggedIn = (state: any) => (state.session.profile);

function MainPage() {
    const history = useHistory();

    const logged = useSelector(isLoggedIn);

    // const handleState = () => {
    // 	const state = store.getState();
    // 	if (!state.session.profile) {
    //      istory.push("/login")
    // 	}
    // };

    // store.subscribe(handleState);

    return (
        <div>
            <h1>Logged in!</h1>
            <button onClick={Logout}>Log out</button>
            <button
                onClick={() =>
                    getProfile(() => {
                        console.log(store.getState());
                    })
                }
>
                    test
                </button>
        </div>
    );
}

export default MainPage;
