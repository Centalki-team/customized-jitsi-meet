import { Dimensions } from 'react-native';
const { height } = Dimensions.get('screen');

export default {

    jitsiScreenContainer: {
        flex: 1,
        height: height / 2
    },

    safeArea: {
        flex: 1
    }
};
