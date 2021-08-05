import axiosBetterStacktrace from 'axios-better-stacktrace';

export default ({$axios}) => {
  axiosBetterStacktrace($axios);
}
