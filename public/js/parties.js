// ----------------------------------
//	*** POPULATING PARTIES PAGE ***
// ----------------------------------
	
//parse the json file
var parties = parseJSON('/db/parties.json');
//jquery function
$(function(){
	//populate the p tag with leadership data
	for(const party in parties){
		for(const partyObjKey in parties[party]){
			//1. append leadership info to leadership p tag
			$('.leadership-para[data-party="' + party + '"][data-leadership="' + partyObjKey + '"]')
				.text(parties[party][partyObjKey]);

			//2. append policy info to policy p tag
			$('.policies-para[data-party="' + party + '"][data-policy="' + partyObjKey + '"]')
				.text(parties[party][partyObjKey]);

			//3. append history info to history p tag
			$('.history-para[data-party="' + party + '"][data-history="' + partyObjKey + '"]')
				.text(parties[party][partyObjKey]);
		}
	}
});
