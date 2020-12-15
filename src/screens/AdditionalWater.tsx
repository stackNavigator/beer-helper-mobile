import React from 'react';
import { View } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

import { getSize, windowWidth } from '../constants/index';

const { useSharedValue, useAnimatedStyle, useAnimatedGestureHandler, interpolate } = Animated;
const offsetWidth = getSize(50);

export const AdditionalWater = () => {
  const translateX = useSharedValue(0);

  const onGestureEvent = useAnimatedGestureHandler({
    onStart: (_, ctx: PanGestureContext) => {
      ctx.offsetX = translateX.value;
    },
    onActive: (event, ctx: PanGestureContext) => {
      translateX.value = ctx.offsetX as number + event.translationX;
    },
    onEnd: (event) => {
      if (event.absoluteX - offsetWidth < 0) {
        translateX.value = 0;
      }
    }
  });

  const style = useAnimatedStyle(() => {
    const opacity = interpolate(
      translateX.value,
      [0, windowWidth - offsetWidth],
      [1, 0]
    );
    const borderWidth = interpolate(
      translateX.value,
      [0, windowWidth - offsetWidth],
      [0, 20]
    );
    const degreeValue = interpolate(
      translateX.value,
      [0, windowWidth - offsetWidth],
      [0, 45]
    );

    return {
      transform: [{ translateX: translateX.value }, { rotate: `${degreeValue}deg` }],
      opacity,
      borderWidth
    };
  });

  return (
    <View>
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.Text style={[style, { backgroundColor: 'black', color: 'yellow', alignSelf: 'flex-start', borderColor: 'red' }]}>
          Additional Water is here.
        </Animated.Text>
      </PanGestureHandler>
    </View>
  );
}
