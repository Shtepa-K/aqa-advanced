function Numbers(num) {
        console.log(num)    
        
        if (num <= 0) {
            return
        }
Numbers(num-1)    
}

Numbers(5)