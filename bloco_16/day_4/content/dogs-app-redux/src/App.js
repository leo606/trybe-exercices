import { connect } from 'react-redux';
import { fetchDog } from './redux/actions';
import './App.css';

function App({ isFetching, src, fetchDog }) {
  return isFetching ? (
    <h3>Loading</h3>
  ) : (
    <div style={{ width: 500 }}>
      <button style={{ display: 'block' }} onClick={fetchDog} type="button">
        Novo Doguinho
      </button>
      <img style={{ width: '100%' }} src={src} alt="dog" />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    src: state.imagePath,
    isFetching: state.isFetching,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchDog: () => dispatch(fetchDog()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
