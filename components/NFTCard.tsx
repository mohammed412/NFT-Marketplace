import React from "react";
import { Image, Text, View } from "react-native";
import { assets, SIZES } from "../constants";
import { CircleButton } from "./Button";

SIZES
const NFTCard = ({data}:any) => {
    return (
        <View className="bg-w border-sm mb-6 m-2 shadow-[dark]">
            <View className="w-full h-64">
                <Image
                    source={data.image}
                    resizeMode="cover"
                    className="w-full h-full rounded-t-xl"
                />
                <CircleButton className="absolute w-10 h-10 bg-w rounded-xl align-middle justify-center"  />
            </View>
        </View>
    )
}

export default NFTCard