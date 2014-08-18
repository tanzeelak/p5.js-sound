require.config({
	baseUrl:'./',
	paths : {
		'lib' : '../lib',
		'chai' : './testDeps/chai',
	}
});

var allTests = ['tests/p5.SoundFile', 'tests/p5.Amplitude', 'tests/p5.Oscillator', 'tests/p5.Signal'];

require(allTests, function(){
	mocha.run(); 
});