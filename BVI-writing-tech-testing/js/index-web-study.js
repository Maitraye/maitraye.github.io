var round = 0;
var participantNo = 0;
var example_played = false;
var stimulus_played = false;
var stimulus_paused = false;

const sound = new Audio();

function setPtNo(){
    // set unique participant number from backend
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById(id="Participant").innerHTML = this.responseText;
            participantNo = parseInt(this.responseText);
        }
    };
    xhttp.open("GET", "participant_number.txt", true);
    xhttp.send();

    // participantNo = int(self.ptInput.text())
    console.log (participantNo);
}

setPtNo();

shortcut.add("p", playSound);
shortcut.add("s", stopSound);
shortcut.add("n", goNextRound);

function playSound() {
    if (stimulus_played == false) {
        sound.play();
        stimulus_played = true;
    }
    else{
        if (stimulus_paused == false) {
            console.log("already played!");
        }
        else{
            sound.play();
            stimulus_paused = false;
        }
    }
}

function stopSound(){
    sound.pause();
    stimulus_paused = true;
}

function goNextRound(){
    // this function should be triggered with the next button
    if (!example_played){
        round += 1;
    }
    console.log ("round: " + round)
    filenameOnly = selectStimulus()
    console.log (filenameOnly)

    stimulus_played = false;

    // get the name of the audio to play
    sound.src = "audio/" + filenameOnly + ".wav";
}

function selectStimulus(){
    var commentMarkupMode = "";
    var commentRepMode = "";
    var changeMarkupMode = "";
    var complexity = "";
    var stimulus = "";
    var foldername = "";

    //part 1
    if (round <= 6){
        commentMarkupMode = "Separate";

        // for participants 1, 4, 7, treatment order is T1, T2, T3
        if (participantNo % 3 == 1){
            if (round <= 2){
                commentRepMode = 'Announce';
            }
            else if (round == 3 || round == 4){
                commentRepMode = 'Tone';
            }
            else{
                commentRepMode = 'Tone_overlay';
            }
        }

        // for participants 2, 5, 8, the order is T2, T3, T1
        else if (participantNo %3 == 2){
            if (round <= 2){
                commentRepMode = 'Tone';
            }
            else if (round == 3 || round == 4){
                commentRepMode = 'Tone_overlay';
            }
            else{
                commentRepMode = 'Announce';
            }
        }
        // for participants 3, 6, 9, the order is T3, T2, T1
        else{
            if (round <= 2){
                commentRepMode = 'Tone_overlay';
            }
            else if (round == 3 || round == 4){
                commentRepMode = 'Announce';
            }
            else {
                commentRepMode = 'Tone';
            }
        }

        //select stimulus name based on Treatment and round
        if (commentRepMode === 'Announce'){
            if (round % 2 == 1){
                if (!example_played){
                    example_played = true;
                    return "Ex-part1-T1";
                }
                else {
                    stimulus = 'Berlin';
                    example_played = false;
                }
            }
            else{
                stimulus = "Penguins"
            }
        }
        else if (commentRepMode === "Tone"){
            if (round % 2 == 1){
                if (!example_played){
                    example_played = true;
                    return "Ex-part1-T2";
                }
                else{
                    stimulus = 'Kingfishers';
                    example_played = false
                }
            }
            else{
                stimulus = "Blue lagoon";
            }
        }
        else if (commentRepMode === 'Tone_overlay'){
            if (round % 2 == 1) {
                if (!example_played){
                    example_played = true;
                    return "Ex-part1-T3";
                }
                else{
                    stimulus = 'Dolphins';
                    example_played = false;
                }
            }
            else{
                stimulus = "Venice";
            }
        }

        // complexity based on round and participant no
        if (participantNo % 6 == 1 || participantNo % 6 == 3 || participantNo % 6 == 4){
            if (round == 1 || round == 4 || round == 5){
                complexity = 'low';
            }
            else{
                complexity = 'high';
            }
        }
        else if (participantNo % 6 == 2 || participantNo %6 == 5){
            if (round == 1 || round ==  4 || round == 6){
                complexity = 'low';
            }
            else{
                complexity = 'high';
            }
        }
        else{
            if (round == 2 || round == 3 || round == 6){
                complexity = 'low';
            }
            else{
                complexity = 'high';
            }
        }
    }
    
    //part 2
    else if (round <= 10) {
        commentRepMode = 'Announce';

        //treatment order depending on participant No
        if (participantNo % 2 == 1) {
            if (round == 7 || round == 8){
                commentMarkupMode = 'Signposting';
            }
            else {
                commentMarkupMode = 'Signposting_voice_coded';
            }
        }
        else{
            if (round == 9 || round == 10) {
                commentMarkupMode = 'Signposting_voice_coded';
            }
            else {
                commentMarkupMode = 'Signposting';
            }
        }

        // stimulus name based on treatment and round
        if (commentMarkupMode == 'Signposting'){
            if (round % 2 == 1){
                if (!example_played){
                    example_played = true;
                    return "Ex-part2-T1";
                }
                else{
                    stimulus = 'Chena';
                    example_played = false;
                }
            }
            else{
                stimulus = 'Hummingbirds';
            }
        }
        else if (commentMarkupMode == 'Signposting_voice_coded'){
            if (round % 2 == 1){
                if (!example_played){
                    example_played = true;
                    return "Ex-part2-T2";
                }
                else{
                    stimulus = 'Madrid';
                    example_played = false;
                }
            }
            else{
                stimulus = 'Heron';
            }
        }

        //complexity based on participant No and round
        rnd = round - 6;
        if (rnd == 1 || rnd == 4){
            complexity = 'low';
        }
        else{
            complexity = 'high';
        }
    }

    //part 3        
    else if (round <= 16) {
        if (participantNo % 3 == 1){
            if (round == 11 || round == 12) {
                changeMarkupMode = 'Default';
            }
            else if (round == 13 || round == 14){
                changeMarkupMode = 'Diff_presentation';
            }
            else{
                changeMarkupMode = 'Diff_voide_coded';
            }
        }
        else if (participantNo % 3 == 2){
            if (round == 11 || round == 12){
                changeMarkupMode = 'Diff_presentation';
            }
            else if (round == 13 || round == 14){
                changeMarkupMode = 'Diff_voide_coded';
            }
            else{
                changeMarkupMode = 'Default';
            }
        }
        else{
            if (round == 11 || round == 12){
                changeMarkupMode = 'Diff_voide_coded';
            }
            else if (round == 13 || round == 14){
                changeMarkupMode = 'Default';
            }
            else{
                changeMarkupMode = 'Diff_presentation';
            }
        }

        // stimulus based on treatment and round
        rnd = round - 10;
        if (changeMarkupMode === 'Default'){
            if (rnd % 2 == 1){
                if (!example_played){
                    example_played = true;
                    return "Ex-part3-T1";
                }
                else{
                    stimulus = 'Rhinos';
                    example_played = false;
                }
            }
            else{
                stimulus = 'Woodpeckers';
            }
        }
        else if (changeMarkupMode === 'Diff_presentation'){
            if (rnd % 2 == 1){
                if (!example_played){
                    example_played = true;
                    return "Ex-part3-T2";
                }
                else{
                    stimulus = 'Beluga_whales';
                    example_played = false;
                }
            }
            else{
                stimulus = 'Eiffel_tower';
            }
        }
        else if (changeMarkupMode === 'Diff_voide_coded'){
            if (rnd % 2 == 1){
                if (!example_played){
                    example_played = true;
                    return "Ex-part3-T3";
                }
                else{
                    stimulus = 'Dung_beetle';
                    example_played = false;
                }
            }
            else{
                stimulus = 'Ostrich';
            }
        }

        // complexity based on round and participant no
        if (participantNo % 6 == 1 || participantNo % 6 == 3 || participantNo % 6 == 4) {
            if (rnd == 1 || rnd == 4 || rnd == 5){
                complexity = 'low';
            }
            else{
                complexity = 'high';
            }
        }
        else if (participantNo % 6 == 2 || participantNo % 6 == 5){
            if (rnd == 1 || rnd == 4 || rnd == 6){
                complexity = 'low';
            }
            else{
                complexity = 'high';
            }
        }
        else{
            if (rnd == 2 || rnd == 3 || rnd == 6){
                complexity = 'low';
            }
            else{
                complexity = 'high';
            }
        }
    }
    
    foldername = stimulus + "-" + complexity;
    return foldername;
}