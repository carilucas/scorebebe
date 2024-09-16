import { Font, StyleSheet, Text, View } from "@react-pdf/renderer";
import RobotoLight from '../../fonts/Roboto/Roboto-Light.ttf';
import RobotoRegular from '../../fonts/Roboto/Roboto-Regular.ttf';
import RobotoBold from '../../fonts/Roboto/Roboto-Bold.ttf';

Font.register({
    family: 'Roboto', fonts: [
        { src: RobotoLight },
        { src: RobotoRegular, fontWeight: 400 },
        { src: RobotoBold },
    ]
});

const styles = StyleSheet.create({
    h3: {
        fontSize: '13px',
        fontWeight: 'bold',
        color: '#374151',
        fontFamily: 'Roboto'
    },
    h4: {
        fontSize: '13px',
        fontWeight: '400',
        color: '#374151',
        fontFamily: 'Roboto'
    },
})

const PartoPdf = ({parto}) => {

  return (
      <>
          {
              ( parto === 'cesarea' ) ?
                  <View style={{ display: 'flex', justifyContent: 'flex-start', flexDirection:'row', alignItems:'flex-end' }}>
                      <Text style={styles.h4}>Cesárea </Text>
                      <View style={{ display: 'flex', justifyContent: 'flex-start', flexDirection:'row', alignItems:'flex-end'}}>
                          <Text style={styles.h3}> Puntaje:</Text> <Text style={styles.h4}>15</Text>
                      </View>
                  </View>
              :( parto === 'vaginalEutocico' ) ?
                  <View style={{ display: 'flex', justifyContent: 'flex-start', flexDirection:'row', alignItems:'flex-end' }}>
                      <Text style={styles.h4}>Parto vaginal eutócico</Text>
                      <View style={{ display: 'flex', justifyContent: 'flex-start', flexDirection:'row', alignItems:'flex-end'}}>
                          <Text style={styles.h3}> Puntaje:</Text> <Text style={styles.h4}>15</Text>
                      </View>
                  </View>
              :( parto === 'vaginalDistoco' ) ?
                  <View style={{ display: 'flex', justifyContent: 'flex-start', flexDirection:'row', alignItems:'flex-end' }}>
                      <Text style={styles.h4}>Parto distócico vaginal</Text>
                      <View style={{ display: 'flex', justifyContent: 'flex-start', flexDirection:'row', alignItems:'flex-end'}}>
                          <Text style={styles.h3}> Puntaje:</Text> <Text style={styles.h4}>19</Text>
                      </View>
                  </View>
              :
                  <View></View>
          }
      </>
  )
}

export default PartoPdf
