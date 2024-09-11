const numbers = [1, 1, 2, 3, 5];

export function findCombinations(targetSum) {
    // Helper function to perform backtracking
    function backtrack(start, target, path, results) {
        if (target === 0) {
            results.push(createFormattedArray(numbers.length, path));
            return;
        }
        if (target < 0) {
            return;
        }

        for (let i = start; i < numbers.length; i++) {
            
            path.push(i);  // Track index
            backtrack(i + 1, target - numbers[i], path, results);
            path.pop();    // Remove last index for next iteration
        }
    }

    function createFormattedArray(length, indices) {
        const formattedArray = new Array(length).fill(null);
        for (const index of indices) {
            formattedArray[index] = numbers[index];
        }
        return formattedArray;
    }

    let results = [];
    // Handle general cases with backtracking
    backtrack(0, targetSum, [], results);
    
    return results;
}


export function findDisplay(arr1, arr2) {
    if (arr1.length === 0 && arr2.length > 0) {
        return arr2.map(row => 
        row.map(value => value === null ? null : "red")
    );
    } else if (arr2.length === 0 && arr1.length > 0) {
        return arr1.map(row => 
        row.map(value => value === null ? null : "green")
    );
    }else if (arr1.length === 0 && arr2.length === 0) {
        return [["white","white","white", "white","white"]]
    }else {
        return generateAllCombinations(findDisplay(arr1,[]),findDisplay([],arr2))
    }
}

function combineRows(row1, row2) {
    return row1.map((cell1, index) => {
      const cell2 = row2[index];
      if (cell1 === null) return cell2;
      if (cell2 === null) return cell1;
      return (cell1 === 'red' && cell2 === 'green') || (cell1 === 'green' && cell2 === 'red') ? 'blue' : cell1;
    });
  }
  
  function generateAllCombinations(arr1, arr2) {
    const combinations = [];
    arr1.forEach(row1 => {
      arr2.forEach(row2 => {
        combinations.push(combineRows(row1, row2));
      });
    });
    return combinations;
  }