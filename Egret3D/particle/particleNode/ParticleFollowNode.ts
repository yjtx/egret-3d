﻿module egret3d {

    /**
    * @language zh_CN
    * @class egret3d.ParticleFollowNode
    * @classdesc
    * 粒子跟随效果节点
    * @see egret3d.AnimationNode
    * @version Egret 3.0
    * @platform Web,Native
    */
    export class ParticleFollowNode extends AnimationNode {

        /**
        * @language zh_CN
        * 跟随目标
        * @version Egret 3.0
        * @platform Web,Native
        */

        //##FilterBegin## ##Particle##
        //##FilterEnd##
        constructor() {
            super();
            //##FilterBegin## ##Particle##
            //##FilterEnd##

        }

        /**
        * @language zh_CN
        * 填充粒子跟随属性
        * @param data ParticleDataNode 粒子数据来源
        * @version Egret 3.0
        * @platform Web,Native
        */
        public initNode(data: ParticleDataNode): void {
            //##FilterBegin## ##Particle##
            //##FilterEnd##
        }

        /**
        * @language zh_CN
        * 填充顶点数据
        * @param geometry 网格数据
        * @param count 粒子数量
        * @version Egret 3.0
        * @platform Web,Native
        */
        public build(geometry: Geometry, count: number) {
            //##FilterBegin## ##Particle##
            //##FilterEnd##
        }

        private bornTime: number = 0;
        private life: number = 0;
        private id: number = 0;
        private timeIndex: number = 0;

        /**
        * @language zh_CN
        * 顶点数据是否需要重新upload
        * @version Egret 3.0
        * @platform Web,Native
        */
        private geometryDirty: boolean = false;

        /**
        * @language zh_CN
        * @param animTime 动画当前时间（单位为ms）
        * @param delay  这一帧的时间跨度
        * @param geometry 几何对象
        * 顶点数据是否需要重新upload
        * @version Egret 3.0
        * @platform Web,Native
        */
        public update(animTime: number, delay: number, geometry: Geometry) {
            //##FilterBegin## ##Particle##
            //##FilterEnd##
        }

        /**
        * @private
        */
        public activeState(time: number, animTime: number, delay: number, animDelay: number, usage: PassUsage, geometry: SubGeometry, context3DProxy: Context3DProxy) {
            //##FilterBegin## ##Particle##
            //##FilterEnd##
        }
    }

} 