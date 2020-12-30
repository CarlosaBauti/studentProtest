'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroARScene,
  ViroText,
  ViroMaterials,
  Viro3DObject,
  ViroAmbientLight,
  ViroSpotLight,
  ViroNode,
  ViroQuad,
  ViroAnimation,
} from 'react-viro';

var createReactClass = require('create-react-class');

var HelloWorldSceneAR = createReactClass({
  getInitialState() {
    return {
      text : "Initializing AR...",
      runAnimation:true,
    };
  },
  render: function() {
    return (
      <ViroARScene>
        <ViroText text="Hello World" scale={[.2, .2, .2]} position={[0, 0, -1]} style={styles.helloWorldTextStyle} />
        <ViroAmbientLight color="#ffffff" intensity={200}/>

        <ViroNode position={[0, -1, -1]} dragType="FixedToWorld" onDrag={()=>{}}>
          <ViroSpotLight
            innerAngle={5}
            outerAngle={25}
            direction={[0,-1,0]}
            position={[0, 5, 0]}
            color="#ffffff"
            castsShadow={true}
            shadowMapSize={2048}
            shadowNearZ={2}
            shadowFarZ={7}
            shadowOpacity={.7}
          />

          <Viro3DObject
            source={require('./res/3D_character/nick01.vrx')}
            resources={[require('./res/3D_character/Unwrapped_Nick_02.png')]}
            resources={[require('./res/3D_character/glasses.png')]}
            resources={[require('./res/3D_character/Head_Only.png')]}
            position={[-5, -15, -5]}
            scale={[.09, .09, .09]}
            type="VRX"
            onClick={this._onTappedTurkey}
            animation={{name:"01", run:this.state.runAnimation, loop:true,}}
      />

<ViroQuad
      position={[0, 0, 0]}
      rotation={[-90, 0, 0]}
      width={4} height={4}
      arShadowReceiver={true} />

          </ViroNode>

        </ViroARScene>
    );
  },

   _onTappedTurkey() {
    this.setState({
      runAnimation : !this.state.runAnimation,
    })
  },

});

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 40,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

module.exports = HelloWorldSceneAR;