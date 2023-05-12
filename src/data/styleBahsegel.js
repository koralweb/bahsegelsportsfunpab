import colorsBahsegel from './themeBahsegel';

const styleBahsegel = {
  mainBlockBahsegel: {
    flex: 1,
    backgroundColor: colorsBahsegel.lightgreen,
    zIndex: 99,
  },
  titleBahsegel: {
    textAlign: 'center',
    marginTop: 15,
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 10,
    color: colorsBahsegel.green,
    textDecorationLine: 'underline',
  },
  nextButtonBahsegel: {
    width: 250,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderWidth: 3,
    borderColor: colorsBahsegel.green,
    marginTop: 20,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: 40,
  },
};

export default styleBahsegel;
