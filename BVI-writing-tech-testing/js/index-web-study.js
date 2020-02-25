var round = 0;
var participantNo = 0;
var filenames = {
    1: ["Example", "Ex-part1-T1", "Berlin-low", "Penguins-high", 
        "Ex-part1-T2", "Kingfishers-high", "Blue_lagoon-low", 
        "Ex-part1-T3", "Dolphins-low", "Venice-high",
        "Ex-part2-T1", "Chena-low", "Hummingbirds-high",
        "Ex-part2-T2", "Madrid-high", "Heron-low",
        "Ex-part3-T1", "Rhinos-low", "Woodpeckers-high",
        "Ex-part3-T2", "Beluga_whales-high", "Eiffel_tower-low",
        "Ex-part3-T3", "Dung_beetle-low", "Ostrich-high"],

    2: ["Example", "Ex-part1-T2", "Kingfishers-low", "Blue_lagoon-high",
        "Ex-part1-T3", "Dolphins-high", "Venice-low",
        "Ex-part1-T1", "Berlin-high", "Penguins-low",
        "Ex-part2-T2", "Madrid-low", "Heron-high",
        "Ex-part2-T1", "Chena-high", "Hummingbirds-low",
        "Ex-part3-T2", "Beluga_whales-low", "Eiffel_tower-high",
        "Ex-part3-T3", "Dung_beetle-high", "Ostrich-low",
        "Ex-part3-T1", "Rhinos-high", "Woodpeckers-low"],

    3: ["Example", "Ex-part1-T3", "Dolphins-low", "Venice-high",
        "Ex-part1-T1", "Berlin-high", "Penguins-low",
        "Ex-part1-T2", "Kingfishers-low", "Blue_lagoon-high",
        "Ex-part2-T1", "Chena-low", "Hummingbirds-high",
        "Ex-part2-T2", "Madrid-high", "Heron-low",
        "Ex-part3-T3", "Dung_beetle-low", "Ostrich-high",
        "Ex-part3-T1", "Rhinos-high", "Woodpeckers-low",
        "Ex-part3-T2", "Beluga_whales-low", "Eiffel_tower-high"],

    4: ["Example", "Ex-part1-T1", "Berlin-low", "Penguins-high", 
        "Ex-part1-T2", "Kingfishers-high", "Blue_lagoon-low", 
        "Ex-part1-T3", "Dolphins-low", "Venice-high",
        "Ex-part2-T2", "Madrid-low", "Heron-high",
        "Ex-part2-T1", "Chena-high", "Hummingbirds-low",
        "Ex-part3-T1", "Rhinos-low", "Woodpeckers-high",
        "Ex-part3-T2", "Beluga_whales-high", "Eiffel_tower-low",
        "Ex-part3-T3", "Dung_beetle-low", "Ostrich-high"],

    5: ["Example", "Ex-part1-T2", "Kingfishers-low", "Blue_lagoon-high",
        "Ex-part1-T3", "Dolphins-high", "Venice-low",
        "Ex-part1-T1", "Berlin-high", "Penguins-low",
        "Ex-part2-T1", "Chena-low", "Hummingbirds-high",
        "Ex-part2-T2", "Madrid-high", "Heron-low",
        "Ex-part3-T2", "Beluga_whales-low", "Eiffel_tower-high",
        "Ex-part3-T3", "Dung_beetle-high", "Ostrich-low",
        "Ex-part3-T1", "Rhinos-high", "Woodpeckers-low"],

    0: ["Example", "Ex-part1-T3", "Dolphins-high", "Venice-low",
        "Ex-part1-T1", "Berlin-low", "Penguins-high",
        "Ex-part1-T2", "Kingfishers-high", "Blue lagoon-low",
        "Ex-part2-T2", "Madrid-low", "Heron-high",
        "Ex-part2-T1", "Chena-high", "Hummingbirds-low",
        "Ex-part3-T3", "Dung_beetle-high", "Ostrich-low",
        "Ex-part3-T1", "Rhinos-low", "Woodpeckers-high",
        "Ex-part3-T2", "Beluga_whales-high", "Eiffel_tower-low"]
}
var fileName = "Example";

const sound = new Audio();
sound.src = "audio/" + fileName + ".wav";

function setPtNo(){
    // Selecting the input element and get its value 
    participantNo = document.getElementById("participantNo").value;
    console.log (participantNo);
    document.getElementById(id="Participant").innerHTML = participantNo;
}

// shortcut.add("p", playSound);
// shortcut.add("s", stopSound);
// shortcut.add("n", goNextRound);

function playSound() {
    sound.play();
}

function stopSound(){
    sound.pause();
}

function goNextRound(){
    // this function should be triggered with the next button
    var input = document.getElementById("roundNo").value;
    if (input === "") {
        if (round < 24){
            round += 1;
        }
    }
    // round num direct input in form
    else{
        round = Number(input);
    }
    document.getElementById(id="Round").innerHTML = round;
    fileName = filenames[participantNo%6][round];
    document.getElementById(id="File").innerHTML = fileName;
    
    // get the name of the audio to play
    sound.src = "audio/" + fileName + ".wav";
}

// function selectStimulus(){
//     var commentMarkupMode = "";
//     var commentRepMode = "";
//     var changeMarkupMode = "";
//     var complexity = "";
//     var stimulus = "";
//     var foldername = "";

//     //part 1
//     if (round <= 6){
//         commentMarkupMode = "Separate";

//         // for participants 1, 4, 7, treatment order is T1, T2, T3
//         if (participantNo % 3 == 1){
//             if (round <= 2){
//                 commentRepMode = 'Announce';
//             }
//             else if (round == 3 || round == 4){
//                 commentRepMode = 'Tone';
//             }
//             else{
//                 commentRepMode = 'Tone_overlay';
//             }
//         }

//         // for participants 2, 5, 8, the order is T2, T3, T1
//         else if (participantNo %3 == 2){
//             if (round <= 2){
//                 commentRepMode = 'Tone';
//             }
//             else if (round == 3 || round == 4){
//                 commentRepMode = 'Tone_overlay';
//             }
//             else{
//                 commentRepMode = 'Announce';
//             }
//         }
//         // for participants 3, 6, 9, the order is T3, T2, T1
//         else{
//             if (round <= 2){
//                 commentRepMode = 'Tone_overlay';
//             }
//             else if (round == 3 || round == 4){
//                 commentRepMode = 'Announce';
//             }
//             else {
//                 commentRepMode = 'Tone';
//             }
//         }

//         //select stimulus name based on Treatment and round
//         if (commentRepMode === 'Announce'){
//             if (round % 2 == 1){
//                 if (!example_played){
//                     example_played = true;
//                     return "Ex-part1-T1";
//                 }
//                 else {
//                     stimulus = 'Berlin';
//                     example_played = false;
//                 }
//             }
//             else{
//                 stimulus = "Penguins"
//             }
//         }
//         else if (commentRepMode === "Tone"){
//             if (round % 2 == 1){
//                 if (!example_played){
//                     example_played = true;
//                     return "Ex-part1-T2";
//                 }
//                 else{
//                     stimulus = 'Kingfishers';
//                     example_played = false
//                 }
//             }
//             else{
//                 stimulus = "Blue lagoon";
//             }
//         }
//         else if (commentRepMode === 'Tone_overlay'){
//             if (round % 2 == 1) {
//                 if (!example_played){
//                     example_played = true;
//                     return "Ex-part1-T3";
//                 }
//                 else{
//                     stimulus = 'Dolphins';
//                     example_played = false;
//                 }
//             }
//             else{
//                 stimulus = "Venice";
//             }
//         }

//         // complexity based on round and participant no
//         if (participantNo % 6 == 1 || participantNo % 6 == 3 || participantNo % 6 == 4){
//             if (round == 1 || round == 4 || round == 5){
//                 complexity = 'low';
//             }
//             else{
//                 complexity = 'high';
//             }
//         }
//         else if (participantNo % 6 == 2 || participantNo %6 == 5){
//             if (round == 1 || round ==  4 || round == 6){
//                 complexity = 'low';
//             }
//             else{
//                 complexity = 'high';
//             }
//         }
//         else{
//             if (round == 2 || round == 3 || round == 6){
//                 complexity = 'low';
//             }
//             else{
//                 complexity = 'high';
//             }
//         }
//     }
    
//     //part 2
//     else if (round <= 10) {
//         commentRepMode = 'Announce';

//         //treatment order depending on participant No
//         if (participantNo % 2 == 1) {
//             if (round == 7 || round == 8){
//                 commentMarkupMode = 'Signposting';
//             }
//             else {
//                 commentMarkupMode = 'Signposting_voice_coded';
//             }
//         }
//         else{
//             if (round == 9 || round == 10) {
//                 commentMarkupMode = 'Signposting_voice_coded';
//             }
//             else {
//                 commentMarkupMode = 'Signposting';
//             }
//         }

//         // stimulus name based on treatment and round
//         if (commentMarkupMode == 'Signposting'){
//             if (round % 2 == 1){
//                 if (!example_played){
//                     example_played = true;
//                     return "Ex-part2-T1";
//                 }
//                 else{
//                     stimulus = 'Chena';
//                     example_played = false;
//                 }
//             }
//             else{
//                 stimulus = 'Hummingbirds';
//             }
//         }
//         else if (commentMarkupMode == 'Signposting_voice_coded'){
//             if (round % 2 == 1){
//                 if (!example_played){
//                     example_played = true;
//                     return "Ex-part2-T2";
//                 }
//                 else{
//                     stimulus = 'Madrid';
//                     example_played = false;
//                 }
//             }
//             else{
//                 stimulus = 'Heron';
//             }
//         }

//         //complexity based on participant No and round
//         rnd = round - 6;
//         if (rnd == 1 || rnd == 4){
//             complexity = 'low';
//         }
//         else{
//             complexity = 'high';
//         }
//     }

//     //part 3        
//     else if (round <= 16) {
//         if (participantNo % 3 == 1){
//             if (round == 11 || round == 12) {
//                 changeMarkupMode = 'Default';
//             }
//             else if (round == 13 || round == 14){
//                 changeMarkupMode = 'Diff_presentation';
//             }
//             else{
//                 changeMarkupMode = 'Diff_voide_coded';
//             }
//         }
//         else if (participantNo % 3 == 2){
//             if (round == 11 || round == 12){
//                 changeMarkupMode = 'Diff_presentation';
//             }
//             else if (round == 13 || round == 14){
//                 changeMarkupMode = 'Diff_voide_coded';
//             }
//             else{
//                 changeMarkupMode = 'Default';
//             }
//         }
//         else{
//             if (round == 11 || round == 12){
//                 changeMarkupMode = 'Diff_voide_coded';
//             }
//             else if (round == 13 || round == 14){
//                 changeMarkupMode = 'Default';
//             }
//             else{
//                 changeMarkupMode = 'Diff_presentation';
//             }
//         }

//         // stimulus based on treatment and round
//         rnd = round - 10;
//         if (changeMarkupMode === 'Default'){
//             if (rnd % 2 == 1){
//                 if (!example_played){
//                     example_played = true;
//                     return "Ex-part3-T1";
//                 }
//                 else{
//                     stimulus = 'Rhinos';
//                     example_played = false;
//                 }
//             }
//             else{
//                 stimulus = 'Woodpeckers';
//             }
//         }
//         else if (changeMarkupMode === 'Diff_presentation'){
//             if (rnd % 2 == 1){
//                 if (!example_played){
//                     example_played = true;
//                     return "Ex-part3-T2";
//                 }
//                 else{
//                     stimulus = 'Beluga_whales';
//                     example_played = false;
//                 }
//             }
//             else{
//                 stimulus = 'Eiffel_tower';
//             }
//         }
//         else if (changeMarkupMode === 'Diff_voide_coded'){
//             if (rnd % 2 == 1){
//                 if (!example_played){
//                     example_played = true;
//                     return "Ex-part3-T3";
//                 }
//                 else{
//                     stimulus = 'Dung_beetle';
//                     example_played = false;
//                 }
//             }
//             else{
//                 stimulus = 'Ostrich';
//             }
//         }

//         // complexity based on round and participant no
//         if (participantNo % 6 == 1 || participantNo % 6 == 3 || participantNo % 6 == 4) {
//             if (rnd == 1 || rnd == 4 || rnd == 5){
//                 complexity = 'low';
//             }
//             else{
//                 complexity = 'high';
//             }
//         }
//         else if (participantNo % 6 == 2 || participantNo % 6 == 5){
//             if (rnd == 1 || rnd == 4 || rnd == 6){
//                 complexity = 'low';
//             }
//             else{
//                 complexity = 'high';
//             }
//         }
//         else{
//             if (rnd == 2 || rnd == 3 || rnd == 6){
//                 complexity = 'low';
//             }
//             else{
//                 complexity = 'high';
//             }
//         }
//     }
    
//     foldername = stimulus + "-" + complexity;
//     return foldername;
// }