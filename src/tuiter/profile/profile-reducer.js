import {createSlice} from "@reduxjs/toolkit";

const initialProfile = [
    {
        firstName: 'Jose', lastName: 'Annunziato', handle: '@jannunzi',
        profilePicture: 'jose.png', 	bannerPicture: 'polyglot.png',
        bio: 'Faculty, Software Engineer, AI, Space, and renewable enthusiast.',
        website: 'youtube.com/webdevtv',
        location: 'Boston, MA',	dateOfBirth: '7/7/1968',	dateJoined: '4/2009',
        followingCount: 340,	followersCount: 223
    }


];

const profileSlice = createSlice({
    name: 'profile',
    initialState: initialProfile,

    reducers: {
        addProfile(state, action) {
            state.push({
                firstName: action.payload.do,

            });
        },


        addFirstName(state, action) {
            state.push({
                firstName: action.payload.do,

            });
        },

    }



});

export const {addProfile, addFirstName} = profileSlice.actions
export default profileSlice.reducer

