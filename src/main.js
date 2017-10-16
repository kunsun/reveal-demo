import Reveal from 'reveal';
import zoom from './plugin/zoom';

require('./plugin/marked')
import '../node_modules/reveal/index.css';
import '../node_modules/reveal/theme/default.css';

Reveal.initialize({
  controls: true,
  progress: true,
  history: true,
  center: true,
  transition: 'linear', // none/fade/slide/convex/concave/zoom
  // transforms3d: false
});