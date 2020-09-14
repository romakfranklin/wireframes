import react from `react`;
import {view, StyleSheet} from `react-native`;

export default ({color, children}) => (
    <View style={styles.container}>
      {children}
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:`#00f`,
        alignItems: `center`,
        justifyContent: `center`,
    }
})