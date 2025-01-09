import { Dimensions } from "react-native";

export const getScreenDimension = () => {
    const { width,height } = Dimensions.get("window");
    return {width,height};
};