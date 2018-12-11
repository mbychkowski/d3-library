import shapes from '../../../src/index.js'

import card from '../../assets/components/card'
import './tab1.css';

const rectangle = new shapes.Rectangle('#tab1-p1');
const circle = new shapes.Circle('#tab1-p2');

rectangle.drawShape();
circle.drawShape();

export {}