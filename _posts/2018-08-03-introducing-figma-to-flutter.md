---
layout: post
lang: en
title: "From design to code, let's think about it"
image: images/pattern_ftf.png
categories:
  - Flutter
tags:
  - Flutter
  - Dart
  - Figma
  - Design
---

If you know me a little you already know that I always think about how we could be more productive as a whole software team. I'm always frustated by the information lost from one member of the team to the other: a customer need that a developer hasn't heard about, a design element that hasn't been exported or explained to the developer.

Today, I'll focus on the process from the UI/UX designer to the developer.

## A typical mobile development process today

On the picture below, I wanted to show you the situation I encounter most often.

![photo]({{ site.url }}/img/ftf_comic_1.png)

So, we've got a first step where the designer creates the visual content and exports it for the developers. For each platform, the developer will study the design resources and adapt this to his favorite platform, with the tools he know. Each time the designer  produces new content (or modifies an existing one), each developer will have to apply this to his platform.

Concerning the business logic, the developers will have to make sure they have clear specs avoid introducing different behaviours.

## Unified development

A first natural step would be to unify the platform specific branches. To achieve this, you can bet on a cross-platform solution. My personnal favorite today is [Flutter](http://www.flutter.io), but [Xamarin](http://www.xamarin.com) is a great choice too.

![photo]({{ site.url }}/img/ftf_comic_2.png)

Okay, we now have a far less specific toolchain and less potential specific issues : a simpler global overall process. Great!

## What if ... ?

But, I'm sure you noticed that the first tasks of the developer are to adapt the designer resources to its platform. Those are really long tasks where the developer has to understand what the designer thought when he created the content.

Just imagine if developers could directly use the content of the designer as components into their code.

![photo]({{ site.url }}/img/ftf_comic_3.png)

## Introducing Figma to Flutter

I immediately liked the [Figma](http://www.figma.com) designer tool  when I discovered it: runs everywhere, simple, collaborative.

But I fell in love after studying a little bit more the software architecture behind it. The engineering team is really incredible: the software is based on modern web technologies (WebAssembly!), and as a bonus they offer open API for anyone.

I started to work on a little tool that converts Figma files to Flutter widgets (Dart code).

![photo]({{ site.url }}/img/ftf_icon.png)

Even if still under active development, you can already try it in your browser here: [Figma-to-Flutter](http://aloisdeniel.github.com/figma-to-flutter).

I will probably write a more detailled post later on how it works, its features and how to use it from your build environment.

## Still very experimental

All of this is purely experimental and under active development. If I would have access to Figma rendering source code it would have been a lot easier and quicker (**if a Figma employee reads this and can share the algorithm, it would be awesome!**), but be aware that all the rendering logic is reverse engineered, so you will experience a lot of inconsistencies!

Though, several things are still missing from my implementation (*stay tuned for new features*):

* **Angular and diamond gradients**: only linear and radial gradients
* **Text supports only solid fills** : it is not possible to have text filled with effects.
* **Theme - colors and text styles** : an `InheritedWidget` will be generated to be able to update colors and styles globally.
* **Only "Pass Through" blend mode**
* **Only "Drop Shadow" effect**
* **Maybe more... :)**

Unfortunately Figma doesn't cover everything that is needed for modern dynamic layouts and I hope that they will add it :

* **Element-to-element constraints** : at the moment you can declare relative margin constraint only from an element to its parent. Unfortunately this doesn't cover dynamic stack of elements that are common.
* **Animations** : only basic transitions are supported today today.

## I use Xamarin too

I'm waiting for the [Drawing Spec](https://github.com/xamarin/Xamarin.Forms/issues/2452) to be implemented to eventually support Xamarin too.

If you want to react to this, please post a comment!

