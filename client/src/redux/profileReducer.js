import {
    getAuth,
    onAuthStateChanged,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
} from "firebase/auth"
import { fire } from "../Auth/firebaseConfig"
const provider = new GoogleAuthProvider()
const auth = getAuth(fire)

const UPDATE_PROFILE = "UPDATE_PROFILE"

const profileState = null

export const updateProfile = (newProfile) => ({
    type: UPDATE_PROFILE,
    payload: newProfile,
})
export const signin = () => async (dispatch) => {
    signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user
            console.log(user)
            dispatch(updateProfile(user))
        })
        .catch((error) => {
            const errorMessage = error.message
            console.log(errorMessage)
        })
}

export const signout = () => async (dispatch) => {
    signOut(auth)
        .then(() => {
            dispatch(updateProfile(null))
        })
        .catch(() => {
            alert(`couldn't sign out!!`)
        })
}

export const getUser = () => async (dispatch) => {
    await onAuthStateChanged(auth, (user) => {
        if (user) dispatch(updateProfile(user))
        else dispatch(updateProfile(null))
    })
}

const profileReducer = (state = profileState, action) => {
    switch (action.type) {
        case UPDATE_PROFILE:
            return action.payload
        default:
            return state
    }
}
export default profileReducer
