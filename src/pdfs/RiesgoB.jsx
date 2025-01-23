import { Document, Font, Image, Link, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
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
    pSmall: {
        fontSize: '10px',
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

const RiesgoB = ({ formularioUno = {}, formularioTres = {}, formularioCuatro = {}, formularioCinco = {}, formularioSeis = {}, score = 0 }) => {

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
                            <View style={{ flex: '1', display: 'flex', justifyContent: 'center' }}>
                                <Text style={[styles.h2, { textAlign: 'center' }]}>Score Bebé categoría B</Text>
                                <View>
                                    <Image src={caution} style={{ display: 'block', margin: 'auto', width: '105px', height: '100px' }} />
                                </View>
                            </View>
                            <View style={{ flex: '1', display: 'flex', justifyContent: 'center' }}>
                                <Text style={[styles.h2, { textAlign: 'center' }]} >Score del Neonato</Text>
                                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={styles.circle} >
                                        <Text style={{ color: '#ca8a04', fontSize: '40px', fontWeight: 'bold' }}>{score}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View >
                            <Text style={styles.p}>
                                Neonato/a con moderado riesgo de resultados graves en salud neonatal. Tiene &gt; 77% posibilidades de resultados graves en salud neonatal que los niños de bajo riesgo. Requiere estabilización inmediata. Como usted lo/a atiende en primer o segundo nivel de atención:
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
                    <View style={{ border: '1px solid #e7e5e4', display: 'flex', justifyContent: 'space-between', flexDirection: 'row', gap: '30px', padding: '20px', marginTop: '20px' }}>
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
                                Madre tuvo polihidramnios u oligohidramnios
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
                                Madre con adicciones:
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
                                Madre presenta:
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
                            Descripción del caso:
                        </Text>
                        <Text style={styles.p} >
                            1. Neonato de apellido materno <Text style={{ fontWeight: 'bold', fontSize: '15px' }}>{formularioUno.apellidoMaterno}</Text>, es un neonato de Categoría de riesgo B (riesgo moderado); tiene más de un 77% más probabilidades de eventos adversos neonatales antes de los 15 días de vida que los niños de la categoría C (bajo riesgo). Como se encuentra en el segundo nivel, requiere estabilización inmediata:
                        </Text>
                        <Text style={styles.p} >
                            I. Administre Oxígeno si tiene dificultad respiratoria, cianosis generalizada o posible aspiración meconial.
                        </Text>
                        <Text style={styles.p} >
                            II. Si no existe contraindicación, iniciar lactancia en la primera media hora postparto.
                        </Text>
                        <Text style={styles.p} >
                            III. Dar antibiótico apropiado en caso de:
                        </Text>
                        <Text style={styles.p} >
                            a) rotura de membranas de &gt; 18 horas,
                        </Text>
                        <Text style={styles.p} >
                            b) flujo genital de mal olor o
                        </Text>
                        <Text style={styles.p} >
                            c) prematurez (ver las páginas 60 y 61 del AIEPI clínico <Link src="https://www.dropbox.com/scl/fi/jsr59kqtpqr37vdkd9dcv/AIEPI-FINAL_18102019.pdf?rlkey=dm8ns6izu1rp2ggvnuxyt2evh&st=9bagbzsh&dl=0">(link)</Link> ).
                        </Text>
                        <Text style={styles.p} >
                            2. Considerar la gestión de la transferencia, considerando el acróstico “R.E.F.I.E.R.A.” de acuerdo con la capacidad resolutiva de su establecimiento de salud:
                        </Text>
                        <Text style={styles.h3} >
                            Normas de estabilización y transporte para la referencia (AIEPI) (1)
                        </Text>
                        <Text style={styles.pBold} >
                            R: RESPIRACIÓN = OXÍGENO
                        </Text>
                        <Text style={styles.p} >
                            a) Recién nacido/a: Aspiración de secreciones (primero boca y luego nariz) y posición adecuada.
                        </Text>
                        <Text style={styles.p} >
                            b) Si la clasificación lo recomienda, dar oxígeno a flujo libre por catéter nasal (en el recién nacido no más de 0,5 L/min).
                        </Text>
                        <Text style={styles.pBold} >
                            E: ESTABILIDAD HEMODINÁMICA
                        </Text>
                        <Text style={styles.p} >
                            a) Toda niña o niño con signos de hipovolemia y baja perfusión (Llenado capilar &gt; 2 segundos, palidez o moteado de piel y taquicardia &gt; 180), debe estabilizarse antes de referir con cargas rápidas de Lactato Ringer o Solución Salina al 0,9%, 10-20 ml/kg.
                        </Text>
                        <Text style={styles.p} >
                            b) Realizar maniobras de reanimación neonatal en caso de paro respiratorio o cardíaco.
                        </Text>
                        <Text style={styles.pBold} >
                            F: FRÍO = EVITAR HIPOTERMIA
                        </Text>
                        <Text style={styles.p} >
                            (Evitar el contacto directo con bolsa de agua caliente o fuentes de calor)
                        </Text>
                        <Text style={styles.p} >
                            a) Envolver a la recién nacida o recién nacido con paños limpios, tibios y secos, incluyendo la cabeza (colocar gorrito).
                        </Text>
                        <Text style={styles.p} >
                            b) Ponerle en contacto directo, piel a piel (Técnica canguro).
                        </Text>
                        <Text style={styles.p} >
                            c) Según disponibilidad, utilizar cualquier fuente de calor: cuna radiante, caja de transporte, incubadora, u otros (según disponibilidad). Recuerde que la hipotermia es mortal para los neonatos.
                        </Text>
                        <Text style={styles.pBold} >
                            I: INFORMACIÓN A PADRES Y CUIDADORES
                        </Text>
                        <Text style={styles.p} >
                            Informar la necesidad de referencia, explicar a los padres y cuidadores, escuchar sus temores, resolver sus dudas y ayudarles a solucionar sus problemas.
                        </Text>
                        <Text style={styles.pBold} >
                            E: ENERGÍA = GLUCOSA
                        </Text>
                        <Text style={styles.p} >
                            En la niña desnutrida o niño desnutrido grave, lactante menor y especialmente en la recién nacida o el recién nacido es vital prevenir la hipoglucemia. Administrar:
                        </Text>
                        <Text style={styles.p} >
                            a) Leche materna, Dextrosa al 5% en agua azucarada por vía oral o sonda orogástrica, 20-50 mL (10 mL/kg), administrados lentamente.
                        </Text>
                        <Text style={styles.p} >
                            b) Como emergencia, se puede colocar media cucharadita (2,5 g) de azúcar corriente, humedecida, debajo de la lengua del recién nacido, para absorción sublingual.
                        </Text>
                        <Text style={styles.p} >
                            c) Si existe personal capacitado para canalizar vía periférica: Solución intravenosa con dextrosa al 10%; 100 mL (según disponibilidad), a 12 microgotas/minuto.
                        </Text>
                        <Text style={styles.pBold} >
                            NOTA:
                        </Text>
                        <Text style={styles.p} >
                            Para preparar agua azucarada, emplear cuatro cucharaditas de azúcar al ras (20 g) en una taza de 200 mL de agua limpia.
                        </Text>
                        <Text style={styles.pBold} >
                            R: REGISTRO Y MONITORIZACIÓN
                        </Text>
                        <Text style={styles.p} >
                            Controlar FC, FR, llenado capilar, signos de dificultad respiratoria, signos de deshidratación cada 15 minutos y cuantificar diuresis horaria.
                        </Text>
                        <Text style={styles.pBold} >
                            A: ADMINISTRACIÓN DE LÍQUIDOS Y MEDICAMENTOS
                        </Text>
                        <Text style={styles.p} >
                            Administrar antibiótico, broncodilatadores, quinina, paracetamol y todo tratamiento necesario antes y durante la referencia. Líquidos de base así:
                        </Text>
                        <Text style={styles.p} >
                            &lt; 10 kg = 100 mL/kg/día,
                        </Text>
                        <Text style={styles.p} >
                            De 10 a 20 kg = 1000 mL + (50 mL/kg por cada kilo mayor de 10 kg),
                        </Text>
                        <Text style={styles.p} >
                            &gt; 20 kg = 1500 mL + (20 mL/kg por cada Kg &gt; 20 kg).
                        </Text>
                        <Text style={styles.p} >
                            Otros cuidados importantes: a) Distensión abdominal: Colocar sonda nasogástrica abierta para descomprimir el estómago, evitar aspiración. b) Dificultad respiratoria: transportar al RN con oxígeno por catéter nasal si es posible en ambulancia equipada. c) Trauma con hemorragia externa: cubrir la herida con compresas con solución salina tibia o plástico. d) Fractura o trauma: inmovilizar el área afectada.
                        </Text>
                        <Text style={styles.p} >
                            Otros cuidados importantes:
                        </Text>
                        <Text style={styles.p} >
                            a) Distensión abdominal: Colocar sonda nasogástrica abierta para descomprimir el estómago, evitar aspiración.
                        </Text>
                        <Text style={styles.p} >
                            b) Dificultad respiratoria: transportar al RN con oxígeno por catéter nasal si es posible en ambulancia equipada.
                        </Text>
                        <Text style={styles.p} >
                            c) Trauma con hemorragia externa: cubrir la herida con compresas con solución salina tibia o plástico.
                        </Text>
                        <Text style={styles.p} >
                            d) Fractura o trauma: inmovilizar el área afectada.
                        </Text>
                        <Text style={styles.pBold} >
                            Durante el transporte, la niña o niño debe estar acompañado por personal de salud capacitado en reanimación y si es posible en ambulancia equipada.
                        </Text>
                        <Text style={styles.pSmall} >
                            Referencia: [1] B. Marchand, B. Tello, I. Dueñas-Espín, B. Bonifaz, Atención integral a las enfermedades prevalentes de la infancia (AIEPI) clínico. Cuadros de procedimientos, Second Edition, Ministerio de Salud Pública del Ecuador, Quito-Ecuador, 2018.∫
                        </Text>
                        <Text style={styles.p} >
                            5 .Aplicar las normas de cuidado neonatal vigentes.
                        </Text>
                    </View>
                </View>
            </Page>
        </Document>
    )
}

export default RiesgoB;
