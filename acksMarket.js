on("chat:message", function(msg) {
    var marketOutput= "There are none available";
    var args = msg.content.split(" ");
    if (msg.type !== "api") {
		return;
	}
	if(playerIsGM(msg.playerid) && args[0]=="!acksMarket"){
        switch(args[1]) {
            case 'equipment':
                switch(args[2]) {
                    case 'I':
                        switch(args[3]) {
                            case '1GP':
                                marketOutput= "There are 1700 available.";
                                break;
                            case '10GP':
                                marketOutput= "There are 100 available.";
                                break;
                            case '100GP':
                                marketOutput= "There are 15 available.";
                                break;
                            case '1000GP':
                                marketOutput= "There are 7 available.";
                                break;
                            case '10000GP':
                                marketOutput= "There are 2 available.";
                                break;
                            case 'maxGP':
                                marketOutput= chanceOfOne(10);
                                break;
                        }
                        break;
                    case 'II':
                        switch(args[3]) {
                            case '1GP':
                                marketOutput= "There are 585 available.";
                                break;
                            case '10GP':
                                marketOutput= "There are 30 available.";
                                break;
                            case '100GP':
                                marketOutput= "There are 5 available.";
                                break;
                            case '1000GP':
                                marketOutput= "There are 2 available.";
                                break;
                            case '10000GP':
                                marketOutput= "There is 1 available.";
                                break;
                            case 'maxGP':
                                marketOutput= chanceOfOne(5);
                                break;
                        }
                        break;
                    case 'III':
                        switch(args[3]) {
                            case '1GP':
                                marketOutput= "There are 260 available.";
                                break;
                            case '10GP':
                                marketOutput= "There are 15 available.";
                                break;
                            case '100GP':
                                marketOutput= "There are 2 available.";
                                break;
                            case '1000GP':
                                marketOutput= "There is 1 available.";
                                break;
                            case '10000GP':
                                marketOutput= chanceOfOne(25);
                                break;
                            case 'maxGP':
                                marketOutput= chanceOfOne(2);
                                break;
                        }
                        break;
                    case 'IV':
                        switch(args[3]) {
                            case '1GP':
                                marketOutput= "There are 65 available.";
                                break;
                            case '10GP':
                                marketOutput= "There are 5 available.";
                                break;
                            case '100GP':
                                marketOutput= "There is 1 available.";
                                break;
                            case '1000GP':
                                marketOutput= chanceOfOne(25);
                                break;
                            case '10000GP':
                                marketOutput= chanceOfOne(10);
                                break;
                            case 'maxGP':
                                marketOutput= "There are none available.";
                                break;
                        }
                        break;
                    case 'V':
                        switch(args[3]) {
                            case '1GP':
                                marketOutput= "There are 30 available.";
                                break;
                            case '10GP':
                                marketOutput= "There is 1 available.";
                                break;
                            case '100GP':
                                marketOutput= chanceOfOne(25);
                                break;
                            case '1000GP':
                                marketOutput= chanceOfOne(10);
                                break;
                            case '10000GP':
                                marketOutput= chanceOfOne(5);
                                break;
                            case 'maxGP':
                                marketOutput= "There are none available.";
                                break;
                        }
                        break;
                    case 'VI':
                        switch(args[3]) {
                            case '1GP':
                                marketOutput= "There are 10 available.";
                                break;
                            case '10GP':
                                marketOutput= "There is 1 available.";
                                break;
                            case '100GP':
                                marketOutput= chanceOfOne(10);
                                break;
                            case '1000GP':
                                marketOutput= chanceOfOne(5);
                                break;
                            case '10000GP':
                                marketOutput= chanceOfOne(1);
                                break;
                            case 'maxGP':
                                marketOutput= "There are none available.";
                                break;
                        }
                        break;
                }
                break;
            case 'mercenaries':
                switch(args[2]) {
                    case 'I':
                        switch(args[3]) {
                            case 'LightInfantry':
                                marketOutput= "There " + simpleDiceRoller("4d100") +" available.";
                                break;
                            case 'HeavyInfantry':
                                marketOutput= "There " + simpleDiceRoller("2d100") +" available.";
                                break;
                            case 'Slinger':
                                marketOutput= "There " + simpleDiceRoller("8d20") +" available.";
                                break;
                            case 'Bowman':
                                marketOutput= "There " + simpleDiceRoller("8d20") +" available.";
                                break;
                            case 'Crossbowman':
                                marketOutput= "There " + simpleDiceRoller("8d20") +" available.";
                                break;
                            case 'Longbowman':
                                marketOutput= "There " + simpleDiceRoller("4d20") +" available.";
                                break;
                            case 'LightCavalry':
                                marketOutput= "There " + simpleDiceRoller("4d20") +" available.";
                                break;
                            case 'MountedCrossbowman':
                                marketOutput= "There " + simpleDiceRoller("3d20") +" available.";
                                break;
                            case 'HorseArcher':
                                marketOutput= "There " + simpleDiceRoller("3d20") +" available.";
                                break;
                            case 'MediumCavalary':
                                marketOutput= "There " + simpleDiceRoller("3d20") +" available.";
                                break;
                            case 'HeavyCavalry':
                                marketOutput= "There " + simpleDiceRoller("4d10") +" available.";
                                break;
                            case 'CataphractCavalry':
                                marketOutput= "There " + simpleDiceRoller("3d10") +" available.";
                                break;
                            case 'BeastRider':
                                marketOutput= "There " + simpleDiceRoller("3d10") +" available.";
                                break;
                        }
                        break;
                    case 'II':
                        switch(args[3]) {
                            case 'LightInfantry':
                                marketOutput= "There " + simpleDiceRoller("5d20") +" available.";
                                break;
                            case 'HeavyInfantry':
                                marketOutput= "There " + simpleDiceRoller("5d10") +" available.";
                                break;
                            case 'Slinger':
                                marketOutput= "There " + simpleDiceRoller("4d10") +" available.";
                                break;
                            case 'Bowman':
                                marketOutput= "There " + simpleDiceRoller("4d10") +" available.";
                                break;
                            case 'Crossbowman':
                                marketOutput= "There " + simpleDiceRoller("4d10") +" available.";
                                break;
                            case 'Longbowman':
                                marketOutput= "There " + simpleDiceRoller("2d10") +" available.";
                                break;
                            case 'LightCavalry':
                                marketOutput= "There " + simpleDiceRoller("2d10") +" available.";
                                break;
                            case 'MountedCrossbowman':
                                marketOutput= "There " + simpleDiceRoller("4d4") +" available.";
                                break;
                            case 'HorseArcher':
                                marketOutput= "There " + simpleDiceRoller("4d4") +" available.";
                                break;
                            case 'MediumCavalary':
                                marketOutput= "There " + simpleDiceRoller("4d4") +" available.";
                                break;
                            case 'HeavyCavalry':
                                marketOutput= "There " + simpleDiceRoller("1d10") +" available.";
                                break;
                            case 'CataphractCavalry':
                                marketOutput= "There " + simpleDiceRoller("1d8") +" available.";
                                break;
                            case 'BeastRider':
                                marketOutput= "There " + simpleDiceRoller("1d8") +" available.";
                                break;
                        }
                        break;
                    case 'III':
                        switch(args[3]) {
                            case 'LightInfantry':
                                marketOutput= "There " + simpleDiceRoller("5d10") +" available.";
                                break;
                            case 'HeavyInfantry':
                                marketOutput= "There " + simpleDiceRoller("3d8") +" available.";
                                break;
                            case 'Slinger':
                                marketOutput= "There " + simpleDiceRoller("2d10") +" available.";
                                break;
                            case 'Bowman':
                                marketOutput= "There " + simpleDiceRoller("2d10") +" available.";
                                break;
                            case 'Crossbowman':
                                marketOutput= "There " + simpleDiceRoller("2d10") +" available.";
                                break;
                            case 'Longbowman':
                                marketOutput= "There " + simpleDiceRoller("1d10") +" available.";
                                break;
                            case 'LightCavalry':
                                marketOutput= "There " + simpleDiceRoller("1d10") +" available.";
                                break;
                            case 'MountedCrossbowman':
                                marketOutput= "There " + simpleDiceRoller("2d4") +" available.";
                                break;
                            case 'HorseArcher':
                                marketOutput= "There " + simpleDiceRoller("2d4") +" available.";
                                break;
                            case 'MediumCavalary':
                                marketOutput= "There " + simpleDiceRoller("2d4") +" available.";
                                break;
                            case 'HeavyCavalry':
                                marketOutput= "There " + simpleDiceRoller("1d6") +" available.";
                                break;
                            case 'CataphractCavalry':
                                marketOutput= "There " + simpleDiceRoller("1d4") +" available.";
                                break;
                            case 'BeastRider':
                                marketOutput= "There " + simpleDiceRoller("1d4") +" available.";
                                break;
                        }
                        break;
                    case 'IV':
                        switch(args[3]) {
                            case 'LightInfantry':
                                marketOutput= "There " + simpleDiceRoller("3d4") +" available.";
                                break;
                            case 'HeavyInfantry':
                                marketOutput= "There " + simpleDiceRoller("1d8") +" available.";
                                break;
                            case 'Slinger':
                                marketOutput= "There " + simpleDiceRoller("1d6") +" available.";
                                break;
                            case 'Bowman':
                                marketOutput= "There " + simpleDiceRoller("1d6") +" available.";
                                break;
                            case 'Crossbowman':
                                marketOutput= "There " + simpleDiceRoller("1d6") +" available.";
                                break;
                            case 'Longbowman':
                                marketOutput= "There " + simpleDiceRoller("1d3") +" available.";
                                break;
                            case 'LightCavalry':
                                marketOutput= "There " + simpleDiceRoller("1d3") +" available.";
                                break;
                            case 'MountedCrossbowman':
                                marketOutput= "There " + simpleDiceRoller("1d2") +" available.";
                                break;
                            case 'HorseArcher':
                                marketOutput= "There " + simpleDiceRoller("1d2") +" available.";
                                break;
                            case 'MediumCavalary':
                                marketOutput= "There " + simpleDiceRoller("1d2") +" available.";
                                break;
                            case 'HeavyCavalry':
                                marketOutput= "There is 1 available.";
                                break;
                            case 'CataphractCavalry':
                                marketOutput= chanceOfOne(66);
                                break;
                            case 'BeastRider':
                                marketOutput= chanceOfOne(66);
                                break;
                        }
                        break;
                    case 'V':
                        switch(args[3]) {
                            case 'LightInfantry':
                                marketOutput= "There " + simpleDiceRoller("1d6") +" available.";
                                break;
                            case 'HeavyInfantry':
                                marketOutput= "There " + simpleDiceRoller("1d3") +" available.";
                                break;
                            case 'Slinger':
                                marketOutput= "There " + simpleDiceRoller("1d2") +" available.";
                                break;
                            case 'Bowman':
                                marketOutput= "There " + simpleDiceRoller("1d2") +" available.";
                                break;
                            case 'Crossbowman':
                                marketOutput= "There " + simpleDiceRoller("1d2") +" available.";
                                break;
                            case 'Longbowman':
                                marketOutput= "There is 1 available.";
                                break;
                            case 'LightCavalry':
                                marketOutput= "There is 1 available.";
                                break;
                            case 'MountedCrossbowman':
                                marketOutput= chanceOfOne(75);
                                break;
                            case 'HorseArcher':
                                marketOutput= chanceOfOne(70);
                                break;
                            case 'MediumCavalary':
                                marketOutput= chanceOfOne(70);
                                break;
                            case 'HeavyCavalry':
                                marketOutput= chanceOfOne(50);
                                break;
                            case 'CataphractCavalry':
                                marketOutput= chanceOfOne(40);
                                break;
                            case 'BeastRider':
                                marketOutput= chanceOfOne(40);
                                break;
                        }
                        break;
                    case 'VI':
                        switch(args[3]) {
                            case 'LightInfantry':
                                marketOutput= "There " + simpleDiceRoller("1d2") +" available.";
                                break;
                            case 'HeavyInfantry':
                                marketOutput= chanceOfOne(85);
                                break;
                            case 'Slinger':
                                marketOutput= chanceOfOne(70);
                                break;
                            case 'Bowman':
                                marketOutput= chanceOfOne(70);
                                break;
                            case 'Crossbowman':
                                marketOutput= chanceOfOne(70);
                                break;
                            case 'Longbowman':
                                marketOutput= chanceOfOne(33);
                                break;
                            case 'LightCavalry':
                                marketOutput= chanceOfOne(33);
                                break;
                            case 'MountedCrossbowman':
                                marketOutput= chanceOfOne(25);
                                break;
                            case 'HorseArcher':
                                marketOutput= chanceOfOne(23);
                                break;
                            case 'MediumCavalary':
                                marketOutput= chanceOfOne(23);
                                break;
                            case 'HeavyCavalry':
                                marketOutput= chanceOfOne(15);
                                break;
                            case 'CataphractCavalry':
                                marketOutput= chanceOfOne(10);
                                break;
                            case 'BeastRider':
                                marketOutput= chanceOfOne(10);
                                break;
                        }
                        break;
                }
                break;
            case 'specialists':
                switch(args[2]) {
                    case 'I':
                        switch(args[3]) {
                            case 'Alchemist':
                                marketOutput= "There " + simpleDiceRoller("1d10") +" available.";
                                break;
                            case 'AnimalTrainerCommon':
                                marketOutput= "There " + simpleDiceRoller("5d10") +" available.";
                                break;
                            case 'AnimalTrainerExotic':
                                marketOutput= "There " + simpleDiceRoller("1d10") +" available.";
                                break;
                            case 'Armorer':
                                marketOutput= "There " + simpleDiceRoller("3d10") +" available.";
                                break;
                            case 'Engineer':
                                marketOutput= "There " + simpleDiceRoller("1d10") +" available.";
                                break;
                            case 'Healer':
                                marketOutput= "There " + simpleDiceRoller("5d10") +" available.";
                                break;
                            case 'Physicker':
                                marketOutput= "There " + simpleDiceRoller("3d10") +" available.";
                                break;
                            case 'Chirugeon':
                                marketOutput= "There " + simpleDiceRoller("1d10") +" available.";
                                break;
                            case 'MarinerCaptain':
                                marketOutput= "There " + simpleDiceRoller("4d6") +" available.";
                                break;
                            case 'MarinerNavigator':
                                marketOutput= "There " + simpleDiceRoller("5d10") +" available.";
                                break;
                            case 'MarinerSailor':
                                marketOutput= "There " + simpleDiceRoller("4d100") +" available.";
                                break;
                            case 'RuffianCarouser':
                                marketOutput= "There " + simpleDiceRoller("4d100") +" available.";
                                break;
                            case 'RuffianFootpad':
                                marketOutput= "There " + simpleDiceRoller("5d20") +" available.";
                                break;
                            case 'RuffianReciter':
                                marketOutput= "There " + simpleDiceRoller("5d20") +" available.";
                                break;
                            case 'RuffianSpy':
                                marketOutput= "There " + simpleDiceRoller("2d10") +" available.";
                                break;
                            case 'RuffianThug':
                                marketOutput= "There " + simpleDiceRoller("5d20") +" available.";
                                break;
                            case 'Sage':
                                marketOutput= "There " + simpleDiceRoller("1d6") +" available.";
                                break;
                        }
                        break;
                    case 'II':
                        switch(args[3]) {
                            case 'Alchemist':
                                marketOutput= "There " + simpleDiceRoller("1d3") +" available.";
                                break;
                            case 'AnimalTrainerCommon':
                                marketOutput= "There " + simpleDiceRoller("2d6") +" available.";
                                break;
                            case 'AnimalTrainerExotic':
                                marketOutput= "There " + simpleDiceRoller("1d3") +" available.";
                                break;
                            case 'Armorer':
                                marketOutput= "There " + simpleDiceRoller("2d4") +" available.";
                                break;
                            case 'Engineer':
                                marketOutput= "There " + simpleDiceRoller("1d3") +" available.";
                                break;
                            case 'Healer':
                                marketOutput= "There " + simpleDiceRoller("2d6") +" available.";
                                break;
                            case 'Physicker':
                                marketOutput= "There " + simpleDiceRoller("2d4") +" available.";
                                break;
                            case 'Chirugeon':
                                marketOutput= "There " + simpleDiceRoller("1d3") +" available.";
                                break;
                            case 'MarinerCaptain':
                                marketOutput= "There " + simpleDiceRoller("1d6") +" available.";
                                break;
                            case 'MarinerNavigator':
                                marketOutput= "There " + simpleDiceRoller("1d12") +" available.";
                                break;
                            case 'MarinerSailor':
                                marketOutput= "There " + simpleDiceRoller("5d20") +" available.";
                                break;
                            case 'RuffianCarouser':
                                marketOutput= "There " + simpleDiceRoller("5d20") +" available.";
                                break;
                            case 'RuffianFootpad':
                                marketOutput= "There " + simpleDiceRoller("4d6") +" available.";
                                break;
                            case 'RuffianReciter':
                                marketOutput= "There " + simpleDiceRoller("4d6") +" available.";
                                break;
                            case 'RuffianSpy':
                                marketOutput= "There " + simpleDiceRoller("1d6") +" available.";
                                break;
                            case 'RuffianThug':
                                marketOutput= "There " + simpleDiceRoller("4d6") +" available.";
                                break;
                            case 'Sage':
                                marketOutput= "There " + simpleDiceRoller("1d2") +" available.";
                                break;
                        }
                        break;
                    case 'III':
                        switch(args[3]) {
                            case 'Alchemist':
                                marketOutput= "There is 1 available.";
                                break;
                            case 'AnimalTrainerCommon':
                                marketOutput= "There " + simpleDiceRoller("1d6") +" available.";
                                break;
                            case 'AnimalTrainerExotic':
                                marketOutput= "There is 1 available.";
                                break;
                            case 'Armorer':
                                marketOutput= "There " + simpleDiceRoller("1d4") +" available.";
                                break;
                            case 'Engineer':
                                marketOutput= "There is 1 available.";
                                break;
                            case 'Healer':
                                marketOutput= "There " + simpleDiceRoller("1d6") +" available.";
                                break;
                            case 'Physicker':
                                marketOutput= "There " + simpleDiceRoller("1d4") +" available.";
                                break;
                            case 'Chirugeon':
                                marketOutput= "There is 1 available.";
                                break;
                            case 'MarinerCaptain':
                                marketOutput= "There " + simpleDiceRoller("1d3") +" available.";
                                break;
                            case 'MarinerNavigator':
                                marketOutput= "There " + simpleDiceRoller("1d6") +" available.";
                                break;
                            case 'MarinerSailor':
                                marketOutput= "There " + simpleDiceRoller("5d10") +" available.";
                                break;
                            case 'RuffianCarouser':
                                marketOutput= "There " + simpleDiceRoller("5d10") +" available.";
                                break;
                            case 'RuffianFootpad':
                                marketOutput= "There " + simpleDiceRoller("2d6") +" available.";
                                break;
                            case 'RuffianReciter':
                                marketOutput= "There " + simpleDiceRoller("2d6") +" available.";
                                break;
                            case 'RuffianSpy':
                                marketOutput= "There " + simpleDiceRoller("1d3") +" available.";
                                break;
                            case 'RuffianThug':
                                marketOutput= "There " + simpleDiceRoller("2d6") +" available.";
                                break;
                            case 'Sage':
                                marketOutput= chanceOfOne(65);
                                break;
                        }
                        break;
                    case 'IV':
                        switch(args[3]) {
                            case 'Alchemist':
                                marketOutput= chanceOfOne(33);
                                break;
                            case 'AnimalTrainerCommon':
                                marketOutput= "There " + simpleDiceRoller("1d2") +" available.";
                                break;
                            case 'AnimalTrainerExotic':
                                marketOutput= chanceOfOne(33);
                                break;
                            case 'Armorer':
                                marketOutput= "There is 1 available.";
                                break;
                            case 'Engineer':
                                marketOutput= chanceOfOne(33);
                                break;
                            case 'Healer':
                                marketOutput= "There " + simpleDiceRoller("1d2") +" available.";
                                break;
                            case 'Physicker':
                                marketOutput= "There is 1 available.";
                                break;
                            case 'Chirugeon':
                                marketOutput= chanceOfOne(33);
                                break;
                            case 'MarinerCaptain':
                                marketOutput= chanceOfOne(80);
                                break;
                            case 'MarinerNavigator':
                                marketOutput= "There " + simpleDiceRoller("1d2") +" available.";
                                break;
                            case 'MarinerSailor':
                                marketOutput= "There " + simpleDiceRoller("3d4") +" available.";
                                break;
                            case 'RuffianCarouser':
                                marketOutput= "There " + simpleDiceRoller("3d4") +" available.";
                                break;
                            case 'RuffianFootpad':
                                marketOutput= "There " + simpleDiceRoller("1d3") +" available.";
                                break;
                            case 'RuffianReciter':
                                marketOutput= "There " + simpleDiceRoller("1d3") +" available.";
                                break;
                            case 'RuffianSpy':
                                marketOutput= chanceOfOne(65);
                                break;
                            case 'RuffianThug':
                                marketOutput= "There " + simpleDiceRoller("1d3") +" available.";
                                break;
                            case 'Sage':
                                marketOutput= chanceOfOne(15);
                                break;
                        }
                        break;
                    case 'V':
                        switch(args[3]) {
                            case 'Alchemist':
                                marketOutput= chanceOfOne(15);
                                break;
                            case 'AnimalTrainerCommon':
                                marketOutput= chanceOfOne(65);
                                break;
                            case 'AnimalTrainerExotic':
                                marketOutput= chanceOfOne(15);
                                break;
                            case 'Armorer':
                                marketOutput= chanceOfOne(40);
                                break;
                            case 'Engineer':
                                marketOutput= chanceOfOne(15);
                                break;
                            case 'Healer':
                                marketOutput= chanceOfOne(65);
                                break;
                            case 'Physicker':
                                marketOutput= chanceOfOne(40);
                                break;
                            case 'Chirugeon':
                                marketOutput= chanceOfOne(15);
                                break;
                            case 'MarinerCaptain':
                                marketOutput= chanceOfOne(33);
                                break;
                            case 'MarinerNavigator':
                                marketOutput= chanceOfOne(60);
                                break;
                            case 'MarinerSailor':
                                marketOutput= "There " + simpleDiceRoller("1d6") +" available.";
                                break;
                            case 'RuffianCarouser':
                                marketOutput= "There " + simpleDiceRoller("1d6") +" available.";
                                break;
                            case 'RuffianFootpad':
                                marketOutput= "There " + simpleDiceRoller("1d2") +" available.";
                                break;
                            case 'RuffianReciter':
                                marketOutput= "There " + simpleDiceRoller("1d2") +" available.";
                                break;
                            case 'RuffianSpy':
                                marketOutput= chanceOfOne(25);
                                break;
                            case 'RuffianThug':
                                marketOutput= "There " + simpleDiceRoller("1d2") +" available.";
                                break;
                            case 'Sage':
                                marketOutput= chanceOfOne(5);
                                break;
                        }
                        break;
                    case 'VI':
                        switch(args[3]) {
                            case 'Alchemist':
                                marketOutput= chanceOfOne(5);
                                break;
                            case 'AnimalTrainerCommon':
                                marketOutput= chanceOfOne(20);
                                break;
                            case 'AnimalTrainerExotic':
                                marketOutput= chanceOfOne(5);
                                break;
                            case 'Armorer':
                                marketOutput= chanceOfOne(15);
                                break;
                            case 'Engineer':
                                marketOutput= chanceOfOne(5);
                                break;
                            case 'Healer':
                                marketOutput= chanceOfOne(20);
                                break;
                            case 'Physicker':
                                marketOutput= chanceOfOne(15);
                                break;
                            case 'Chirugeon':
                                marketOutput= chanceOfOne(5);
                                break;
                            case 'MarinerCaptain':
                                marketOutput= chanceOfOne(10);
                                break;
                            case 'MarinerNavigator':
                                marketOutput= chanceOfOne(45);
                                break;
                            case 'MarinerSailor':
                                marketOutput= "There " + simpleDiceRoller("1d2") +" available.";
                                break;
                            case 'RuffianCarouser':
                                marketOutput= "There " + simpleDiceRoller("1d2") +" available.";
                                break;
                            case 'RuffianFootpad':
                                marketOutput= chanceOfOne(40);
                                break;
                            case 'RuffianReciter':
                                marketOutput= chanceOfOne(40);
                                break;
                            case 'RuffianSpy':
                                marketOutput= chanceOfOne(10);
                                break;
                            case 'RuffianThug':
                                marketOutput= chanceOfOne(40);
                                break;
                            case 'Sage':
                                marketOutput= "There are none available.";
                                break;
                        }
                        break;
                }
                break;
            case 'henchmen':
                switch(args[2]) {
                    case 'I':
                        switch(args[3]) {
                            case 'NormalMan':
                                marketOutput= "There " + simpleDiceRoller("4d100") +" available.";
                                break;
                            case 'Level1':
                                marketOutput= "There " + simpleDiceRoller("5d10") +" available.";
                                break;
                            case 'Level2':
                                marketOutput= "There " + simpleDiceRoller("3d10") +" available.";
                                break;
                            case 'Level3':
                                marketOutput= "There " + simpleDiceRoller("1d10") +" available.";
                                break;
                            case 'Level4':
                                marketOutput= "There " + simpleDiceRoller("1d6") +" available.";
                                break;
                        }
                        break;
                    case 'II':
                        switch(args[3]) {
                            case 'NormalMan':
                                marketOutput= "There " + simpleDiceRoller("5d20") +" available.";
                                break;
                            case 'Level1':
                                marketOutput= "There " + simpleDiceRoller("2d6") +" available.";
                                break;
                            case 'Level2':
                                marketOutput= "There " + simpleDiceRoller("2d4") +" available.";
                                break;
                            case 'Level3':
                                marketOutput= "There " + simpleDiceRoller("1d3") +" available.";
                                break;
                            case 'Level4':
                                marketOutput= "There " + simpleDiceRoller("1d2") +" available.";
                                break;
                        }
                        break;
                    case 'III':
                        switch(args[3]) {
                            case 'NormalMan':
                                marketOutput= "There " + simpleDiceRoller("4d8") +" available.";
                                break;
                            case 'Level1':
                                marketOutput= "There " + simpleDiceRoller("1d4") +" available.";
                                break;
                            case 'Level2':
                                marketOutput= "There " + simpleDiceRoller("1d3") +" available.";
                                break;
                            case 'Level3':
                                marketOutput= chanceOfOne(85);
                                break;
                            case 'Level4':
                                marketOutput= chanceOfOne(45);
                                break;
                        }
                        break;
                    case 'IV':
                        switch(args[3]) {
                            case 'NormalMan':
                                marketOutput= "There " + simpleDiceRoller("3d4") +" available.";
                                break;
                            case 'Level1':
                                marketOutput= "There " + simpleDiceRoller("1d2") +" available.";
                                break;
                            case 'Level2':
                                marketOutput= "There is 1 available.";
                                break;
                            case 'Level3':
                                marketOutput= chanceOfOne(33);
                                break;
                            case 'Level4':
                                marketOutput= chanceOfOne(15);
                                break;
                        }
                        break;
                    case 'V':
                        switch(args[3]) {
                            case 'NormalMan':
                                marketOutput= "There " + simpleDiceRoller("1d6") +" available.";
                                break;
                            case 'Level1':
                                marketOutput= chanceOfOne(65);
                                break;
                            case 'Level2':
                                marketOutput= chanceOfOne(40);
                                break;
                            case 'Level3':
                                marketOutput= chanceOfOne(15);
                                break;
                            case 'Level4':
                                marketOutput= chanceOfOne(5);
                                break;
                        }
                        break;
                    case 'VI':
                        switch(args[3]) {
                            case 'NormalMan':
                                marketOutput= "There " + simpleDiceRoller("1d2") +" available.";
                                break;
                            case 'Level1':
                                marketOutput= chanceOfOne(20);
                                break;
                            case 'Level2':
                                marketOutput= chanceOfOne(15);
                                break;
                            case 'Level3':
                                marketOutput= chanceOfOne(5);
                                break;
                            case 'Level4':
                                marketOutput= "There are none available.";
                                break;
                        }
                        break;
                }
                break;
        }
        showAvailability(args[2], args[3], marketOutput);
	}
});

function chanceOfOne(percentChance){
    var chance = randomInteger(100);
    if (chance <= percentChance) {
        return "There is 1 available.";
    }else {
        return "There are none available.";
    }
};


const MENU_CSS = {
    'optionsTable': {
        'width': '100%'
    },
    'menu': {
        'background': '#fff',
        'border': 'solid 1px #000',
        'border-radius': '5px',
        'font-weight': 'bold',
        'margin-bottom': '1em',
        'overflow': 'hidden'
    },
    'menuBody': {
        'padding': '5px',
        'text-align': 'center'
    },
    'menuHeader': {
        'background': '#000',
        'color': '#fff',
        'text-align': 'center'
    }
};
function showAvailability(marketClass, purchase, marketOutput) {
    let menu = new HtmlBuilder('.menu');
    menu.append('.menuHeader', 'Market Class ' + marketClass  + ' Availability of ' + purchase);
    menu.append('.menuBody', `<h4>${marketOutput}</h4>`);
    sendChat('acksMarket', `/w gm ${(menu.toString(MENU_CSS))}`);
}
function simpleDiceRoller(simpleDiceExpression) {
    var diceArgs = simpleDiceExpression.split("d");
    var result = 0;
    for (var i = 0; i < diceArgs[0]; i++) {
        result = result + randomInteger(diceArgs[1]);
    }
    if (result == 1) {
        return "is 1";
    }else{
        return "are " + result;
    }
}
