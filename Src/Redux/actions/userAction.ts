import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { Dispatch } from "react";
import { BASE_URL } from '../../Utils'
import { FoodModel } from "../models";


export interface UpdateLocationAction{
    readonly type: 'ON_UPDATE_LOCATION',
    payload:Address
}

export interface UserErrorAction{
    readonly type: 'ON_USER_ERROR',
    payload: any
}

export type UserAction =  | UpdateLocationAction | UserErrorAction ;

export const onUpdateLocation = (location: Address) => {

    return async ( dispatch: Dispatch<UserAction>) => {

        try {
            const locationString = JSON.stringify(location)
            await AsyncStorage.setItem('user_location', locationString)
            // save our location in local storage
            dispatch({
                type: 'ON_UPDATE_LOCATION',
                payload: location
            })

        } catch (error) {
            dispatch({
                type: 'ON_USER_ERROR',
                payload: error
            })
        }

    }

}


// export interface UpdateCartAction{
//     readonly type: 'ON_UPDATE_CART',
//     payload: FoodModel
// }

// export interface UserLoginAction{
//     readonly type: 'ON_USER_LOGIN',
//     payload: string
// }

