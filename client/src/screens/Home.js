import { Button } from "antd"
import { useDispatch, useSelector } from "react-redux"
import { signin, signout } from "../redux/profileReducer"

function Home() {
    const dispatch = useDispatch()
    const profile = useSelector((state) => state.profile)
    console.log(profile)
    return (
        <>
            {profile === null ? (
                <Button onClick={() => dispatch(signin())}>signin</Button>
            ) : (
                <Button onClick={() => dispatch(signout())}>signout</Button>
            )}
        </>
    )
}

export default Home
