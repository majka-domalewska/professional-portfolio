import { Component, AfterViewInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import gsap from 'gsap';
import * as THREE from 'three';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

gsap.registerPlugin(ScrollTrigger);

@Component({
    selector: 'app-three-hero',
    templateUrl: './three-hero.html',
    styleUrl: './three-hero.css',
})
export class ThreeHero implements AfterViewInit, OnDestroy {
    @ViewChild('canvasHost', { static: true }) canvasHost!: ElementRef<HTMLDivElement>;

    private scene = new THREE.Scene();
    private camera!: THREE.PerspectiveCamera;
    private renderer!: THREE.WebGLRenderer;
    private controls!: OrbitControls;
    private frameId = 0;
    private model?: THREE.Object3D;

    ngAfterViewInit(): void {
        this.initScene();
        this.loadModel();
        this.animate();
        window.addEventListener('resize', this.onResize);
    }

    ngOnDestroy(): void {
        cancelAnimationFrame(this.frameId);
        window.removeEventListener('resize', this.onResize);
        this.renderer?.dispose();
    }

    private initScene(): void {
        const host = this.canvasHost.nativeElement;
        const width = host.clientWidth;
        const height = host.clientHeight;


        this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
        this.camera.position.set(-4, -.5, 1.5);
        this.camera.rotation.set(0, -Math.PI / 4, 0);

        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.renderer.setSize(width, height);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        host.appendChild(this.renderer.domElement);

        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true;

        const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
        this.scene.add(ambientLight);

        const dirLight = new THREE.DirectionalLight(0xffffff, 2);
        dirLight.position.set(5, 10, 7);
        this.scene.add(dirLight);
    }

    private loadModel(): void {
        const loader = new GLTFLoader();

        loader.load(
            'assets/charm.glb',
            (gltf) => {
                this.model = gltf.scene;

                let box = new THREE.Box3().setFromObject(this.model);
                const size = box.getSize(new THREE.Vector3());

                const maxDim = Math.max(size.x, size.y, size.z);
                const scale = 3 / maxDim;
                this.model.scale.setScalar(scale);

                box = new THREE.Box3().setFromObject(this.model);
                const center = box.getCenter(new THREE.Vector3());
                this.model.position.sub(center);

                this.scene.add(this.model);
            },
            undefined,
            (error) => {
                console.error('Error loading model:', error);
            },
        );
    }

    private animate = (): void => {
        this.frameId = requestAnimationFrame(this.animate);
        this.controls.update();
        this.renderer.render(this.scene, this.camera);
    };

    private onResize = (): void => {
        const host = this.canvasHost.nativeElement;
        const width = host.clientWidth;
        const height = host.clientHeight;

        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(width, height);

        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(width, height);
    };
}
