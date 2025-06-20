# **Linux**

## **Table of Contents**

- [What is Linux](#what-is-linux)
- [The Terminal](#the-terminal)
- [Basic Commands](#basic-commands)
- [Installing ROS](#installing-ros)
- [Tutorial 1: Basic Teleoperation](#tutorial-1-basic-teleoperation)
- [Tutorial 2: Mapping](#tutorial-2-mapping)
- [Tutorial 3: Navigation](#tutorial-3-navigation)
- [Troubleshooting](#troubleshooting)
- [Additional Resources](#additional-resources)

## **What is Linux**

Linux is a family of free and open-source operating systems based on the Linux kernel (core operating system). Operating systems based on Linux are known as Linux distributions or distros. Examples include Debian, Ubuntu, Fedora, CentOS, Gentoo, Arch Linux, and many others.

The Linux kernel has been under active development since 1991, and has proven to be extremely versatile and adaptable. You can find computers that run Linux in a wide variety of contexts all over the world, from web servers to cell phones. Today, 90% of all cloud infrastructure and 74% of the world’s smartphones are powered by Linux.

## **The Terminal**

The terms “terminal,” “shell,” and “command line interface” are often used interchangeably, but there are subtle differences between them:

- A **terminal** is an input and output environment that presents a text-only window running a shell.
- A **shell** is a program that exposes the computer’s operating system to a user or program. In Linux systems, the shell presented in a terminal is a command line interpreter. The default shell in Ubuntu Linux is known as ==bash==.
- A **command line interface** is a user interface (managed by a command line interpreter program) which processes commands to a computer program and outputs the results.

There are two ways to open a terminal:

1. Pressing the **Win+A** or **show applications** that will open the program menu and typing ==terminal==, then pressing Enter, or
2. Pressing **Ctrl+Alt+T**


## **Better Terminal**
I like the terminator, so install it using the following commands,

Step 1: Update your package list
```
sudo apt update
```
Step 2: Install Terminator 

```
sudo apt install terminator
```
Step 3: Launch Terminator

You can launch it from the terminal and mark as Favorite:

```
terminator
```

## **Basic Commands**

### 1. Nvigating the file system:
To see what directory you are currently active in you can run the ==pwd== command, which stands for “print working directory”
```
$ pwd 
/home/myuser
```

To see a list of files and directories that exist in your current working directory, run the ==ls== command

```
$ ls
Desktop                    Documents
Downloads                  Pictures
Public                     Wallpapers
```

You can get more details if you run ls -al command:
```
$ ls -al
drwxr-xr-x  2 myuser myuser   4096 Apr 30  2025  Desktop
drwxrwxr-x  8 myuser myuser   4096 Oct 29 09:27  Documents
drwxrwxr-x  8 myuser myuser   4096 Dec 10 14:41  Downloads
drwxrwxr-x  8 myuser myuser   4096 May 23 10:43  Pictures
drwxrwxr-x  8 myuser myuser   4096 Jan 19  2025  Public
drwxrwxr-x  8 myuser myuser   4096 Oct 15 09:43  Wallpapers
```

You can create one or more new directories within your current working directory with the ==mkdir== command, which stands for “make directory”. For example, to create two new directories named testdir1 and testdir2, you might run the first command. You can create nested directories by using the ==-p== option:
```
$ mkdir testdir1 testdir2
$ mkdir -p testdir3/testsubdir
```

To navigate into one of these new directories, run the cd command (which stands for “change directory”) and specify the directory’s name:
```
$ cd testdir1
```

Note that you can navigate from anywhere to anywhere. ==cd== only requires a valid filepath. Note also that ==.== represents the current folder and ==..== represents the parent folder. Note also how is shows the current working directory in the shell as well.
```
cd # This will bring you back to home directory
cd testdir3/testsubdir # Brings you into testsubdir
cd ../ # Brings you back out one level into testdir3
cd ../testdir1 # Brings you back out one level and back into testdir1
cd /home/<username>/testdir2 # Absolute reference to testdir2
cd ~/testdir2 # Absolute reference using tilde to testdir2
```

## Installing ROS

To start using TurtleBot4 with ROS, you need to install ROS on your computer. Follow the [ROS installation guide](https://turtlebot.github.io/turtlebot4-user-manual/install-ros.html) for detailed instructions.

## Tutorial 1: Basic Teleoperation

Learn how to teleoperate your TurtleBot4 by following the [Basic Teleoperation tutorial](https://turtlebot.github.io/turtlebot4-user-manual/tutorial-1-basic-teleoperation.html). This tutorial will introduce you to controlling the robot using a keyboard or a joystick.

## Tutorial 2: Mapping

Discover how to create maps with TurtleBot4 using the [Mapping tutorial](https://turtlebot.github.io/turtlebot4-user-manual/tutorial-2-mapping.html). Mapping is essential for autonomous navigation.

## Tutorial 3: Navigation

In the [Navigation tutorial](https://turtlebot.github.io/turtlebot4-user-manual/tutorial-3-navigation.html), you'll learn how to make your TurtleBot4 autonomously navigate within an environment.

## Troubleshooting

Encountering issues? Refer to our [troubleshooting guide](https://turtlebot.github.io/turtlebot4-user-manual/troubleshooting.html) for solutions to common problems.

## Additional Resources

For more in-depth information and advanced usage of TurtleBot4, explore our [additional resources](https://turtlebot.github.io/turtlebot4-user-manual/additional-resources.html).

Have fun exploring the capabilities of your TurtleBot4, and don't hesitate to reach out if you have any questions or need assistance!

[Official TurtleBot Website](https://www.turtlebot.com/)
