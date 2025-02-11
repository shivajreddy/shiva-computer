---
title: "Hand Made Hero"
pubDate: 2025-01-24
description: "My journey for the 'Hand Made Hero'"
author: "shiva"
layout: "../../layouts/ProjectLayout.astro"
tags: ["Projects"]
---

Main Link: [Hand Made Hero](https://mollyrocket.com/#handmade)  
Video Guide: [Episode Guide](https://guide.handmadehero.org/)  

## (my day 00)
Rant: 
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
## Jan-24-2025 (my day 01)
[Intro to C on Windows - Day 1](https://guide.handmadehero.org/intro-to-c/day1/)
- Basics of CPU, Processors, cores
- setup visual studio, set up project as windows application project not console project  

## Jan-25-2025 (my day 02)
[Intro to C on Windows - Day 2](https://guide.handmadehero.org/intro-to-c/day2/)
- how to use 'disassembly' in visual studio
- How to debug
- windows expects \r\n, the visual compiler converts \n to \r\n automatically,  
  but when you want to write/modify a file and want to insert \n, make sure to write  
  file in binary mode, so that the visual compiler doesn't convert \n to \r\n  
- basics of assembly and registers. But having gone through this [x86 Assembly with NASM playlist](https://www.youtube.com/playlist?list=PL2EF13wm-hWCoj6tUBGUmrkJmH1972dBB)  
  atleast the  the first 5 videos has helped a lot of understanding x86 and assembly.

## Jan-26-2025 (my day 03)
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

[Intro to C on Windows - Day 4](https://guide.handmadehero.org/intro-to-c/day4/)
- I have a lot of gaps in terms of understanding assembly. So reading assembly code on disassembly is confusing.
  - the memory view questions: i know each column is a byte, hence it can hold [0,255] and can be  
    represented in hexa with just 2 characters, where 0=0, 255=FF. But when i say a number like 69240, how is this stored in the memory.
  - and how is string stored, and how is user types stored?

## Jan-27-2025 (my day 04)
[Intro to C on Windows - Day 4](https://guide.handmadehero.org/intro-to-c/day4/)


## Jan-28-2025 (my day 05)
[Intro to C on Windows - Day 4](https://guide.handmadehero.org/intro-to-c/day4/)
```
- Understanding the memory view of the program
0x00000088D491E884   44  15   1   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0  ,..................

0x00000088D491E884
------------------
- this is the memory address. and it is represented in hexadecimal, and its decimanl representation is 587681884292.
- memory is a long line of bytes, and this is the address of some byte in that very long array of memory.
- its actually virtual memroy, not physical, which is why it shows the current number of the byte is ~587 billion byte,  
though we don't have that much phsyical memory.

44  15   1   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0
--------------------------------------------------------------------------
- starting with the 0x00000088D491E884'th byte in the virtual memory, Visual Studio will show the next bytes in each of its column.  
- so its like word wrap of this long memory.
- This is the actual contiguous memory starting from 0x00000088D491E884. and  0x00000088D491E884 is the address for '44'
and 0x00000088D491E884+1 would be the address of '15' and so on.  
- 

,..................
-------------------
- this portion is the ASCI representation of this memory (44  15   1   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0)
- 
```

```
- Understanding disasembly
00007FFA258635BB C7 45 94 2C 0F 01 00 mov         dword ptr [rbp-6Ch],10F2Ch

00007FFA258635BB
----------------
- this is the memory address

C7 45 94 2C 0F 01 00
- this is the showing the memory bytes starting from the address 00007FFA258635BB
- the memory (C7 45 94 2C 0F 01 00) is what the processor actually sees.(which is hexadecimal representation of the binary data)
- this set of memory is actually an instruction, that tells the CPU to do something
- the width of the instructions (in this case being 7 bytes) is not constant in x86 processors
- for example the below instruction is only 3 bytes
		00007FFA258635C7 48 63 C9             movsxd      rcx,ecx  

mov         dword ptr [rbp-6Ch],10F2Ch
--------------------------------------
- this is the assembly version of the instruction that is represented in the instruction (C7 45 94 2C 0F 01 00)


```
- Understanding how data is represented in memory that is larger than a byte. because when you look at the memory  
  window, we know that each column is a single byte, so it stores 256 unique values ranging from [0, 255]. but  
  what if we want to store a number like `69420`?
- First off in 'C' code we would use a data type that can hold this number, an 'int' will do. We also know what 'C'  
  will do when we store larger number that doesn't fit, it wraps. ie., if store 256 in a char(which is 1 byte),  
  the largest value a byte can have is 255, so once it tries that, it basically starts from beginning which is 0.  
  hence if 256 stored in a char, it will end up holding the value as 0.
- Now for `69420`, we know int is 4 bytes long, meaning in the memory window, it will be using 4 columns, doesn't  
  mean it has to  always use the 4 columns, because it depends on the value.
- the binary representation of `69420` is `1  0 0 0 0 1 1 1 1  0 0 1 0 1 1 0 0` (double spaced for breaking into bytes)
   - so the first byte should represent `1` and the decimal representation of this byte is 1
   - the second byte will represent `0 0 0 0 1 1 1 1`  and the decimal representation of this byte is 15
   - the third byte will represent `0 0 1 0 1 1 0 0`  and the decimal representation of this byte is 44
```
int x;
x = 69420;
memory of x: 0x00000088D491E884   44  15   1   0   0   0   0   0   0   0

        69420
        1 0000 1111 0010 1100
        - --------- ---------

        6  3 1 0 0 0 0 0 0  0 0 0 0 0 0 0 0
        5  2 6 8 4 2 1 0 0  0 0 0 0 0 0 0 0
        5  7 3 1 0 0 0 5 2  1 0 0 0 0 0 0 0

        3  6 8 9 9 4 2 1 5  2 6 3 1 0 0 0 0
        6  8 4 2 6 8 4 2 6  8 4 2 6 8 4 2 1

        -  ---------------  ---------------
        1  0 0 0 0 1 1 1 1  0 0 1 0 1 1 0 0
        1       15               44
        -  ---------------  ---------------

        65536 2048+1024+512+256 32+8+4
        65536 3840              44
        44 15 1
        2C 0F 01

        6  3 1 0 0 0 0 0 0  0 0 0 0 0 0 0 0
        5  2 6 8 4 2 1 0 0  0 0 0 0 0 0 0 0
        5  7 3 1 0 0 0 5 2  1 0 0 0 0 0 0 0
        3  6 8 9 9 4 2 1 5  2 6 3 1 0 0 0 0
        6  8 4 2 6 8 4 2 6  8 4 2 6 8 4 2 1

        -  ---------------  ---------------
        1  0 0 0 0 1 1 1 1  0 0 1 0 1 1 0 0
        1       15               44
        -  ---------------  ---------------

```
which is when i follow the memory of the integer that is holding the value `69420` is like the following in memory:
```
0x00000088D491E884   44  15   1   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0  ,..................

44  15   1   0
--------------
- these are the 4 bytes that represents the value '69420'
- as you can see its in reverse order. The direction of bytes could be left-to-right or right-to-left, it depends on the  
  CPU manufacturer.
- order of placing bytes is called 'endian' mode. 
Little Endian - places the low order byte first. this is what the above example uses, thats why highest order is on the right
 - example architectures are x86, arm, x64
Big Endian - places the high order bytes first
- these are older architectures
```

- for uninitialized variables, Visual Studio in Debug mode will assign 0xcc to all the bytes, so that when ever we have some bugs  
  (which are mostly un-initialized variable bugs) it will be easier for us to look at memory and see that we are dealing with 0xcc  
  which implied this might be un-initialized. reason why windows doesn't set '0' as default value is because, '0' is much common to  
  set as an actual value, than something likek 0xcc (the decimal value of 0xcc is 240)
- array syntax like `int x = arr[30]` is just a shorthand of `int x = *(arr + 30)`

## Jan-29-2025 (my day 06)
[Intro to C on Windows - Day 5](https://guide.handmadehero.org/intro-to-c/day5/)
- a


