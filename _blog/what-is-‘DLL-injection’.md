# What is ‘DLL injection’?

To understand DLL injection, we need to understand what the dynamic-link library is. DLL is a file that allows users to share code with other resources (programs) to perform specific tasks. It is an external library of functions, and it holds information that can be accessed by different types of software. Using DLL helps users to save memory, as it is only loaded when needed, and it can be used by multiple programs simultaneously.

The starting process loads libraries from several places in physical memory. The locations from which DLLs are loaded by the process include:

Application path directory
Windows directory path returned by GetWindowsDirectory
System directory path in Windows directory
Windows directory returned after call GetSystemDirectory
Current process directory
Directories path in environment variables
DLL Injection is a technique that allows users to run any code in the memory of another process, by forcing the process to load a foreign DLL file. To attach DLL to a process, we need to use the software ‘Injector’ to mount libraries in memory, which is allocated by a program. DLL Injection is commonly used to reverse engineering applications without using source code, when the need modifications or behavior of those applications change. Additionally, it is useful in hot-patching because it allows users to update part of a code without shutting down and restarting the process. Users should keep in mind that many computer viruses can use the DLL injection to obtain user information like malware software. Most antiviruses should prevent this from happening, but less careful users should be wary of suspicious software.


## DLL injection methods
There are a few techniques to inject DLL into another process. The most popular methods of accessing another process are:

## Replacing DLL in a specific path
This is the simplest method of injecting DLL; preparing and compiling a library swap with the original. Inserted DLL with modified code must have functions with the same signatures as the original one.

## Injection using Windows registry
This uses User32.dll, which implements a graphical user interface to program. Most Windows applications use this library. During initialization, the library checks the registry for a boolean key in registry:

HKEY_LOCAL_MACHINE\Software\Microsoft\WindowsNT\CurrentVersion\Windows\LoadAppInit_DLLs

If the value of this key is 1, then the process loads the dlls from libraries which are listed in:

HKEY_LOCAL_MACHINE\Software\Microsoft\WindowsNT\CurrentVersion\Windows\AppInit_DLLs

So if we have administrator privileges, we can add DLL to inject to the list. We must however be aware that our DLL is mapped to all processes which use User32.dll, so initialising DLL with infinite loops or incorrect memory access can crash the inherited processes.

## Injection using Windows Hooks
Windows Hooks is a system message-handling mechanism which allows Windows to catch function calls between Windows or events from inputs like the keyboard or the mouse. Pieces of code implemented in Hooks are used when events are invoked by sending a specific message to programs such as a web browser or another GUI application. There is therefore a possibility to create a keylogger which registers all pressed keys.

## Injection using remote threads
Using remote threads, in contrast to previous methods, allows the user to set the specific target process and a time of attack. Injection consists of passing a string path of injected DLLl to the target application ‘CreateRemoteThread’ function, alongside using the LoadLibrary method. This is the most flexible method, but requires knowledge of many Windows features like processes, threads and virtual memory management.
