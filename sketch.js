const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var stand;

function preload() {


}

function setup(){

    var canvas = createCanvas(1200,400);

    ground = new Ground(1100,380,1200,20);

    stand = new Ground(600,200,300,20); 
}

function draw(){
    background(white);
ground.display();
stand.display();

}
