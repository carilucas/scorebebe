import { Document, Font, Image, Page, StyleSheet, Text, View, Link } from "@react-pdf/renderer";
import { format } from "@formkit/tempo";
import logoScoreBlanco from '../../public/03-scorebebe_logo.png';
import logoPuceBlanco from '../../public/02-PUCE-Blanco-V.png';
import logoIspBlanco from '../../public/04-isp-horizontal_blanco.png';
import caution from '../../public/02-caution.png';
import RobotoLight from '../fonts/Roboto/Roboto-Light.ttf';
import RobotoRegular from '../fonts/Roboto/Roboto-Regular.ttf';
import RobotoBold from '../fonts/Roboto/Roboto-Bold.ttf';
import { edadActual } from "../helpers/edadActual";
import EdadGestacionalPdf from "../components/pdf/EdadGestacionalPdf";
import PesoPdf from "../components/pdf/PesoPdf";
import CentilPdf from "../components/pdf/CentilPdf";
import ApgarPdf from "../components/pdf/ApgarPdf";
import PartoPdf from "../components/pdf/PartoPdf";
import FormularioCinco from "../components/pdf/FormularioCinco";
import FormularioSeis from "../components/pdf/FormularioSeis";


Font.register({
    family: 'Roboto', fonts: [
        { src: RobotoLight },
        { src: RobotoRegular, fontWeight: 400 },
        { src: RobotoBold },
    ]
});
Font.registerHyphenationCallback(word => {
    // Return entire word as unique part
    return [word];
});

const styles = StyleSheet.create({
    page: {
        paddingVertical: '20px'
    },
    header: {
        backgroundColor: '#60a5fa',
        paddingVertical: '10px',
        paddingHorizontal: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: '-20px',
        marginBottom: '20px',
    },
    h1: {
        fontSize: '19px',
        fontWeight: 'bold',
        color: '#111827',
        fontFamily: 'Roboto',
        textAlign: 'center',
        marginBottom: '20px',
        hypens: 'none'
    },
    h2: {
        fontSize: '18px',
        fontWeight: 'bold',
        color: '#111827',
        fontFamily: 'Roboto',
        marginBottom: '20px'
    },
    h3: {
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#374151',
        fontFamily: 'Roboto'
    },
    h4: {
        fontSize: '14px',
        fontWeight: '400',
        color: '#374151',
        fontFamily: 'Roboto'
    },
    p: {
        fontSize: '13px',
        fontWeight: '400',
        color: '#374151',
        fontFamily: 'Roboto',
        marginVertical: '5px'
    },
    pBold: {
        fontSize: '13px',
        fontWeight: 'bold',
        color: '#374151',
        fontFamily: 'Roboto',
        marginVertical: '5px'
    },
    infoItem: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        flexDirection: 'row',
        marginBottom: '10px'
    },
    infoItemVert: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'column',
        marginBottom: '10px'
    },
    circle: {
        border: '4px solid #ca8a04',
        borderRadius: '50%',
        width: '100px',
        height: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

const RiesgoC = ({ formularioUno = {}, formularioTres = {}, formularioCuatro = {}, formularioCinco = {}, formularioSeis = {}, score = 0 }) => {

    const fechaReporte = format(new Date(), { date: 'full', time: 'short' });
    const showFormTresTitle = Object.values(formularioTres).find(value => value === true);
    const showFormCuatroTitle = Object.values(formularioCuatro).find(value => value === true);

    const fechaActual = new Date();
    const fechaHoraNacimiento = `${formularioUno.fechaNacimiento} ${formularioUno.horaNacimiento}`;
    const fechaNacimiento = new Date(fechaHoraNacimiento);

    return (
        <Document>
            <Page size={'A4'} style={styles.page}>
                <View style={styles.header} fixed>
                    <View>
                        <Image src={logoScoreBlanco} style={{ width: '85px', height: '70px' }} />
                    </View>
                    <View style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', gap: '30px' }}>
                        <Image src={logoPuceBlanco} style={{ width: '101px', height: '41px' }} />
                        <Image src={logoIspBlanco} style={{ width: '129px', height: '35px' }} />
                    </View>
                </View>
                <View style={{ padding: '20px' }}>
                    <Text style={styles.h1}>Score Bebé y Reporte del Neonato</Text>
                    <View style={{ border: '1px solid #e7e5e4', padding: '20px' }}>
                        <View style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', gap: '30px', }}>
                            <View style={{ flex: '1' }}>
                                <Text style={styles.h2}>Categoría de riesgo C: Bajo riesgo de muerte neonatal y atiende en primer o segundo nivel de atención:</Text>
                                <View>
                                    <Image src={caution} style={{ width: '85px', height: '70px' }} />
                                </View>
                            </View>
                            <View style={{ flex: '1' }}>
                                <Text style={styles.h2} >Score del Neonato</Text>
                                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={styles.circle} >
                                        <Text style={{ color: '#ca8a04', fontSize: '40px', fontWeight: 'bold' }}>{score}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View >
                            <Text style={styles.p}>
                                Categoría de riesgo C (bajo riesgo): tiene pocas probabilidades de complicaciones neonatales, pero ligeramente mayores a los niños de categoría D (muy bajo riesgo).
                            </Text>
                        </View>
                    </View>
                    <View style={{ border: '1px solid #e7e5e4', display: 'flex', justifyContent: 'space-between', flexDirection: 'row', gap: '30px', padding: '20px' }}>
                        <View style={{ flex: '1' }}>
                            <Text style={styles.h2}>Datos del Neonato</Text>
                            <View style={styles.infoItem}>
                                <Text style={styles.h3}>Fecha y hora del informe: </Text><Text style={styles.h4}>{fechaReporte}</Text>
                            </View>
                            <View style={styles.infoItem}>
                                <Text style={styles.h4}>Recién Nacido </Text><Text style={styles.h3}>{formularioUno?.apellidoMaterno}</Text>
                            </View>
                            <View style={styles.infoItem}>
                                <Text style={styles.h3}>Sexo: </Text><Text style={styles.h4}>{formularioUno?.sexo}</Text>
                            </View>
                            <View style={styles.infoItem}>
                                <Text style={styles.h3}>Edad Actual: </Text><Text style={styles.h4}>{edadActual(fechaActual, fechaNacimiento)}</Text>
                            </View>
                            <View style={styles.infoItem}>
                                <Text style={styles.h3}>Clasificación clínica de la edad gestacional: </Text>
                            </View>
                            <View style={styles.infoItem}>
                                <EdadGestacionalPdf edadGestacional1={formularioUno?.edadGestacional1} edadGestacional2={formularioUno?.edadGestacional2} />
                            </View>
                            <View style={styles.infoItem}>
                                <Text style={styles.h3}>Peso al nacer: </Text>
                                <PesoPdf peso={formularioUno?.peso} />
                            </View>
                            <View style={styles.infoItem}>
                                <Text style={styles.h3}>Centil de peso al nacer para edad gestacional: </Text>
                                <CentilPdf formularioUno={formularioUno} />
                            </View>
                            <View style={styles.infoItem}>
                                <Text style={styles.h3}>Apgar a los 5': </Text>
                                <ApgarPdf apgar={formularioUno?.apgar} />
                            </View>
                            <View style={styles.infoItem}>
                                <Text style={styles.h3}>Tipo de parto: </Text>
                                <PartoPdf parto={formularioUno?.tipoParto} />
                            </View>
                        </View>
                    </View>
                    <View style={{ border: '1px solid #e7e5e4', display: 'flex', justifyContent: 'space-between', flexDirection: 'row', gap: '30px', padding: '20px', marginTop: '60px' }}>
                        <FormularioCinco formularioCinco={formularioCinco} />
                        <FormularioSeis formularioSeis={formularioSeis} />
                    </View>
                    <View style={{ marginTop: '20px' }}>
                        {
                            showFormTresTitle &&
                            <Text style={styles.h2} >
                                Factores que podrían incrementar el riesgo:
                            </Text>
                        }
                        {
                            formularioTres.polihidramnios &&
                            <Text style={styles.h4} >
                                Madre tuvo polihidramnios
                            </Text>
                        }
                        {
                            formularioTres.diabetes &&
                            <Text style={styles.h4} >
                                Madre diabética
                            </Text>
                        }
                        {
                            formularioTres.hipertension &&
                            <Text style={styles.h4} >
                                Madre con trastornos hipertensivos
                            </Text>
                        }
                        {
                            formularioTres.fallece &&
                            <Text style={styles.h4} >
                                Madre fallece posterior al parto
                            </Text>
                        }
                        {
                            formularioTres.ivu &&
                            <Text style={styles.h4} >
                                Madre tuvo IVU en el embarazo
                            </Text>
                        }
                        {
                            formularioTres.streptococus &&
                            <Text style={styles.h4} >
                                Madre tuvo cultivo positivo para Streptococus
                            </Text>
                        }
                        {
                            (formularioTres.menor15 || formularioTres.mayor40) &&
                            <Text style={styles.h3} >
                                Edad de la madre
                            </Text>
                        }
                        {
                            formularioTres.menor15 &&
                            <Text style={styles.h4} >
                                Menor de 15 años
                            </Text>
                        }
                        {
                            formularioTres.mayor40 &&
                            <Text style={styles.h4} >
                                Mayor de 40 años
                            </Text>
                        }
                        {
                            (formularioTres.alcohol || formularioTres.cocaina) &&
                            <Text style={styles.h3} >
                                Madre con adicciones
                            </Text>
                        }
                        {
                            formularioTres.alcohol &&
                            <Text style={styles.h4} >
                                Alcohol
                            </Text>
                        }
                        {
                            formularioTres.cocaina &&
                            <Text style={styles.h4} >
                                Cocaína
                            </Text>
                        }
                        {
                            formularioTres.ninoMasculino &&
                            <Text style={styles.h4} >
                                Niño de sexo masculino
                            </Text>
                        }
                        {
                            formularioTres.riesgoSocial &&
                            <Text style={styles.h4} >
                                Madre con riesgo social (analfabetismo, adicciones, violencia doméstica, vivienda muy lejana a un establecimiento de salud, etc.)
                            </Text>
                        }
                        {
                            (formularioTres.vih || formularioTres.sifilis || formularioTres.tuberculosis || formularioTres.discapacidades) &&
                            <Text style={styles.h3} >
                                Madre presenta
                            </Text>
                        }
                        {
                            formularioTres.vih &&
                            <Text style={styles.h4} >
                                VIH
                            </Text>
                        }
                        {
                            formularioTres.sifilis &&
                            <Text style={styles.h4} >
                                Sífilis
                            </Text>
                        }
                        {
                            formularioTres.tuberculosis &&
                            <Text style={styles.h4} >
                                Tuberculosis
                            </Text>
                        }
                        {
                            formularioTres.discapacidades &&
                            <Text style={styles.h4} >
                                Discapacidades
                            </Text>
                        }
                        {
                            formularioTres.partoDomicilio &&
                            <Text style={styles.h4} >
                                Parto en domicilio o por personal no entrenado
                            </Text>
                        }
                        {
                            formularioTres.controlPrenatal &&
                            <Text style={styles.h4} >
                                Ningún control prenatal
                            </Text>
                        }
                        {
                            formularioTres.reanimacion &&
                            <Text style={styles.h4} >
                                Reanimación neonatal sin presión positiva ni masaje cardiaco
                            </Text>
                        }
                        {
                            formularioTres.embarazoMultiple &&
                            <Text style={styles.h4} >
                                Embarazo múltiple
                            </Text>
                        }
                    </View>
                    <View style={{ marginTop: '20px' }}>
                        {
                            showFormCuatroTitle &&
                            <Text style={styles.h2} >
                                Factores que podrían reducir el riesgo del neonato:
                            </Text>
                        }
                        {
                            formularioCuatro.maduracionPulmonar &&
                            <Text style={styles.h4} >
                                Es prematuro y recibió dosis completa de maduración pulmonar
                            </Text>
                        }
                        {
                            formularioCuatro.uteroinhibicion &&
                            <Text style={styles.h4} >
                                Es prematuro y recibió tratamiento de uteroinhibición hasta alcanzar maduración pulmonar
                            </Text>
                        }
                        {
                            formularioCuatro.madreHipertensa &&
                            <Text style={styles.h4} >
                                Madre con trastorno hipertensivo del embarazo sí recibió antihipertensivo y sulfato de magnesio
                            </Text>
                        }
                    </View>
                    <View style={{ marginTop: '20px' }}>
                        <Text style={styles.h3} >
                            Sugerencias de manejo en el establecimiento (seguir la norma vigente):
                        </Text>
                        <Text style={styles.p} >
                            1. Tome los signos vitales conforme la norma,.
                        </Text>
                        <Text style={styles.p} >
                            2. Mantenga al bebé junto a su madre,
                        </Text>
                        <Text style={styles.p} >
                            3. Fomente la lactancia materna
                        </Text>
                        <Text style={styles.p} >
                            4. Aplique los cuidados rutinarios del recién nacido.
                        </Text>
                        <Text style={styles.p} >
                            Si el neonato está estable y ha cumplido, al menos, 48 horas de vida cuando el nacimiento fue por parto normal; o, 72 horas de vida cuando ha sido por cesárea, proceda a dar el alta de calidad conforme la normativa vigente, y previa evaluación de un médico familiar.
                        </Text>
                        <Text style={styles.h3} >
                            Sugerencias al alta:
                        </Text>
                        <Text style={styles.p} >
                            I. Oriente a la madre en lactancia materna exclusiva, cuidados del recién nacido en el hogar; en caso de prematurez o peso bajo, orientar de los cuidados extra (ver las páginas 53, 54 y 55 del AIEPI Clínico <Link src="http://186.42.188.158:8090/guias/AIEPI%20CLINICO.%20CUADROS%20DE%20PROCEDIMIENTOS.pdf" style={{ color: '#60a5fa' }}> Link </Link>).
                        </Text>
                        <Text style={styles.p} >
                            II. Control en no más de 3 días en consulta de Pediatría o Medicina Familiar, previa notificación al establecimiento de salud para atención preferencial.
                        </Text>
                        <Text style={styles.p} >
                            III. Es importante tomar en cuenta que la muestra para tamizaje metabólico neonatal se debe tomar a partir del cuarto hasta los 28 días de vida del recién nacido.
                        </Text>
                        <Text style={styles.p} >
                            IV. Si el neonato cumple con alguno de los “Factores que podrían incrementar el riesgo neonatal”, requiere una visita domiciliaria por parte de un médico, dentro de los 2 a 3 días de vida, o 24 a 48 horas del alta.
                        </Text>
                    </View>
                </View>
            </Page>
        </Document>
    )
}

export default RiesgoC;
