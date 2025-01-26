---
title: "Hand Made Hero"
pubDate: 2025-01-24
description: "My journey for the 'Hand Made Hero'"
author: "shiva"
tags: ["Projects"]
---

Main Link: [Hand Made Hero](https://mollyrocket.com/#handmade)  
Video Guide: [Episode Guide](https://guide.handmadehero.org/)  

Ramble: 
- I kept debating on, if i should start from day1, infact i know a little bit of C, but not well, just a little,  
I learnt from the kk.king book and did some leetcode problems. And in fact i went over handmade hero first couple   
of videos by skimming through them. My main feeling is that it was outdated, I for one, love to quickly get my  
hands dirty, by setting up a git repo, starting a readme file, and start the main.c file, but immediately it comes to  
a halt when i saw, most of the first few days videos are on Windows platform.  

- What i come to learn is that, this giant (Casey) has been working on this project since 2014, which shows the incredible  
educational effort that went into it. And for everyone(including me initially) who scuffs at the length of the content or   
the platform that he is working on, are poor learners, they don't meant to go deep in the subject. And it makes perfect sense,  
this project is not for the average web dev, it is for the hardcore programmers, and everything that i think of as barrier,  
is myself being the mediocore developer, which i have to kill. So here we fucking go, starting with Day-01, no skipping anything.  

Infact i will take this oppurtunity to create summaries, of every single video, and make a short comprehensive guide through these  
day by articles, on how to navigate this course. I feel like this course is much much more than a university can ever offer, in  
terms of value and quality.  
- This [article](https://medium.com/@ToddCullum/developers-what-handmade-hero-is-and-why-you-should-watch-it-8e88e9c2836e) helped me solidify my above conclusion
and this [video with time-stamp](https://www.youtube.com/watch?v=0xJeEcq16hY&t=710s) said that the first 30 videos are magnitudes greater in  
teaching than a university can ever teach about CS.


My Journey into `Handmade Hero`  
Jan-24-2025 (my day 01)
[Intro to C on Windows - Day 1](https://guide.handmadehero.org/intro-to-c/day1/)
- Basics of CPU, Processors, cores
- setup visual studio, set up project as windows application project not console project  

Jan-25-2025 (my day 02)
[Intro to C on Windows - Day 2](https://guide.handmadehero.org/intro-to-c/day2/)
- how to use 'disassembly' in visual studio
- How to debug
- windows expects \r\n, the visual compiler converts \n to \r\n automatically,  
  but when you want to write/modify a file and want to insert \n, make sure to write  
  file in binary mode, so that the visual compiler doesn't convert \n to \r\n  
- basics of assembly and registers. But having gone through this [x86 Assembly with NASM playlist](https://www.youtube.com/playlist?list=PL2EF13wm-hWCoj6tUBGUmrkJmH1972dBB)  
  atleast the  the first 5 videos has helped a lot of understanding x86 and assembly.

Jan-26-2025 (my day 03)
[Intro to C on Windows - Day 3](https://guide.handmadehero.org/intro-to-c/day3/)
- How to interact with Debug>Memory window
- In the memory window
  - The first first column has the names of the addresses
  - each column in the row(not the address names) represents a single byte.   
   the address of the first byte is address for the first byte in that row  
   0x0000007FE0EFF8E2  254 127   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0  翾.........  
   here  0x0000007FE0EFF8E2 is the address of 254, and second byte that holds the value 127 it's address is 0x0000007FE0EFF8E3  
- In watch window you can get the address of a variable, just like how you do in code, say there was `int x`, and in watch  
  window i can set the name to `&x` and this will tell the byte address of `x`  
- x-ghz is x-billion cycles per 1 second. Ex: 3 GHz = 3 × 10^9 cycles per second.
- Communicating with Memory is super slow, and thats why new technology 
- Latency:
    - Latency refers to the delay or time it takes for a single operation to complete.
    - In the context of memory, it's the time required to access a piece of data once a request is made.
    - Measured in units like nanoseconds (ns) or clock cycles.
  Example: If your memory latency is 20ns, it takes 20ns to start retrieving the first piece of data after requesting it.
- Bandwidth:
    - Bandwidth is the rate at which data can be transferred.
    - In memory, it's measured in bytes per second or bits per second (e.g., GB/s).
    - Bandwidth defines how much data can flow between the memory and CPU over a period of time.
  Example: A memory module with 50 GB/s bandwidth can transfer 50 gigabytes of data per second.

Latency and Bandwidth
  - Latency:
    - Latency refers to the delay or time it takes for a single operation to complete.
    - In the context of memory, it's the time required to access a piece of data once a request is made.
    - Measured in units like nanoseconds (ns) or clock cycles.
    - Example: If your memory latency is 20ns, it takes 20ns to start retrieving the first piece of data after requesting it.
  - Bandwidth:
    - Bandwidth is the rate at which data can be transferred.
    - In memory, it's measured in bytes per second or bits per second (e.g., GB/s).
    - Bandwidth defines how much data can flow between the memory and CPU over a period of time.
    - Example: A memory module with 50 GB/s bandwidth can transfer 50 gigabytes of data per second.

Relationship Between Latency and Bandwidth
    - Latency is about "how fast the first byte arrives."
    - Bandwidth is about "how many bytes arrive in a given time."

Imagine a water pipe analogy:
    - Latency: The time it takes for the first drop of water to come out after turning on the tap.
    - Bandwidth: The volume of water that can flow out of the pipe per second.

How Memory Uses Higher Bandwidth to Cope with Slower Latency ?
- Modern memory systems leverage high bandwidth to hide or mitigate the effects of high latency. This works as follows:
    - Burst Transfers:
        - Memory doesn't fetch just one piece of data at a time. Instead, it retrieves a block of data   
          in one burst (e.g., a cache line, typically 64 bytes).  
        - Once the initial latency is overcome, the subsequent bytes of the block are transferred quickly,   
          utilizing the full bandwidth.
        - Example: If latency is 100 cycles but bandwidth is high, the first byte is delayed, but the rest of the 
             block streams in efficiently.
    - Parallelism:
        - Modern memory (e.g., DDR, GDDR, HBM) operates in parallel, fetching multiple data chunks at once across wide buses.
        - By overlapping operations, the system hides latency with high throughput.
    - Prefetching:
        - Processors predict which memory data will be needed soon and fetch it ahead of time.
        - Even if latency is high, prefetching ensures the data is ready by the time the CPU needs it.


Jan-26-2025 (my day 03)
[Intro to C on Windows - Day 4](https://guide.handmadehero.org/intro-to-c/day4/)
- .
