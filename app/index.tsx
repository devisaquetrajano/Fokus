import { useRef, useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { FokusButton } from "./components/FokusButton";
import { ActionButton } from "./components/ActionButton";
import { Timer } from "./components/Timer";
import { IconPause, IconPlay } from "./components/icons";

const pomodoro = [
  {
    id: 'focus',
    initialValue: 25*60,
    image: require('./assets/pomodoro.png'),
    display: 'Foco'
  },
  {
    id: 'short',
    initialValue: 5*60,
    image: require('./assets/curto.png'),
    display: 'Pausa curta'
  },
  {
    id: 'long',
    initialValue: 15*60,
    image: require('./assets/longo.png'),
    display: 'Pausa longa'
  }
]

export default function Index() {

  const [timerType, setTimerType] = useState(pomodoro[0]);
  const [timerRunning, setTimerRunning] = useState(false);
  const [seconds, setSeconds] = useState(pomodoro[0].initialValue)

  const timerRef = useRef(null)

  const clear = () => {
    if (timerRef.current != null) {
      clearInterval(timerRef.current)
      timerRef.current = null
      setTimerRunning(false)
    }
  }

  const toggleTimer = () => {
    if (timerRef.current) {
      clear();
      return;
    }

    setTimerRunning(true)

    const id = setInterval(() => {
      setSeconds(oldState =>{
        if(oldState ===0){
          clear();
          return timerType.initialValue;
        }
        return oldState -1;
      })
    }, 1000)
    timerRef.current = id;
  }



  const toggleTimmerType = (newTimerType) => {
    setTimerType(newTimerType)
    setSeconds(newTimerType.initialValue)
    clear()

  }

  return (
    <View style={styles.container}>
      <Image
        source={timerType.image}
        resizeMode="contain"
        style={styles.image} />

      <View style={styles.actions}>
        <View style={styles.context}>
          {pomodoro.map(p => (
            <ActionButton
              key={p.id}
              active={timerType.id === p.id}
              onPress={() => toggleTimmerType(p)}
              display={p.display}
            />
          ))}

        </View>

        <Timer totalSeconds={seconds} />

        <FokusButton
          onPress={toggleTimer}
          title={timerRunning ? 'Pausar' : 'Começar'}
          icon={timerRunning ? <IconPause/> : <IconPlay/>} />

      </View>

      <View style={styles.footer}>

        <Text style={styles.footerText}>Projeto fícticio desenvolvido</Text>
        <Text style={styles.footerText}>Isaque Trajano</Text>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#021123',
    gap: 40
  },

  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 1.3
  },

  actions: {
    padding: 24,
    backgroundColor: '#14448090',
    width: '80%',
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#144480',
    gap: 32
  },

  context: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },

  footer: {
    width: '80%'
  },

  footerText: {
    color: '#98A0A8',
    textAlign: 'center',
    fontSize: 13
  },
})
