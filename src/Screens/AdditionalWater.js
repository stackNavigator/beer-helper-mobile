import React from 'react';
import { View, Text } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

const { useSharedValue, useAnimatedStyle, useAnimatedGestureHandler } = Animated;

const AdditionalWater = () => {
  const translateX = useSharedValue(0);

  const onGestureEvent = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.offsetX = translateX.value;
    },
    onActive: (event, ctx) => {
      translateX.value = ctx.offsetX + event.translationX;
    },
    onEnd: (event) => {
      const boundaryX = event.velocityX < 0 ? 0 : translateX.value - 50;
      translateX.value = boundaryX;
    }
  });

  const style = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
      ]
    };
  });

  return (
    <View>
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View style={style}>
          <Text style={{ backgroundColor: 'black', color: 'yellow', alignSelf: 'flex-start' }}>
            Additional Water is here.
            </Text>
        </Animated.View>
      </PanGestureHandler>
    </View>
  )
}

export default AdditionalWater;
