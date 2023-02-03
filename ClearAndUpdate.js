// input will be string representative of CLI i/o
function SumOfValidDirectoryies (input){

    let directorySizeValueTable = {};
    //double array where idx = depth that stores an array of directories in that dept
    //
        //arr[0] = ["/"] //root
        //arr[1] = ["a", "d", "f"] //directories inside "/": "a," "d," "f"
        //arr[2] = ["j"] //directories inside one of the dirs above (we need to roder and remove dirs we already process)
    let directoryDepthCahrt = [];

    for(let charIdx = 0; charIdx < input.Length; charIdx++){
        // Look for "$"
        if(input[charIdx] === "$"){
            //determine cmd
            if(input[charIdx + 2] === "c"){
                //get if its a backwards or forward move

            } else {
                //if it's not a "cd" call, it's an "ls" call
                //This may not be needed in revisions, if it's a `cd <name>` cmd, the next cmd WILL be an ls
                //so in theory we shouldnt actually ever have to check for it, and predict exactly when it happens

            }


        }

    }
}

//creates a navigatable tree based on CLI i/o
function SerializeIO() {

}

let cliIo = 
"$ cd /$ ls dir a 14848514 b.txt 8504156 c.dat dir d $ cd a $ ls dir e 29116 f 2557 g 62596 h.lst $ cd e $ ls 584 i $ cd .. $ cd .. $ cd d $ ls 4060174 j 8033020 d.log 5626152 d.ext 7214296 k"