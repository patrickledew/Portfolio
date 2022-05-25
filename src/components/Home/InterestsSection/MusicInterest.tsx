import React from "react";

const MusicInterest: React.FC = () => {
  let [current, update] = React.useState(
    <>
      <a className="expand-link" onClick={() => next()}>
        Music
      </a>
    </>
  );

  let [stage, setStage] = React.useState(10);

  function next() {
    console.log(stage);
    setStage(++stage);

    switch (stage) {
      case 1:
        update(
          <>
            <a className="expand-link" onClick={() => next()}>
              Playing
            </a>{" "}
            Music
          </>
        );
        break;
      case 2:
        update(
          <>
            Playing Music on{" "}
            <a className="expand-link" onClick={() => next()}>
              Piano
            </a>
          </>
        );
        break;
      case 3:
        update(
          <>
            Playing Music on Piano. Okay, maybe "playing" is a{" "}
            <a className="expand-link" onClick={() => next()}>
              strong word.
            </a>
          </>
        );
        break;
      case 4:
        update(
          <>
            Playing music on piano. Okay, maybe "playing" is a strong word. I
            mostly just{" "}
            <a className="expand-link" onClick={() => next()}>
              noodle around
            </a>{" "}
            on it until I get bored.
          </>
        );
        break;
      case 5:
        update(
          <>
            Playing music on piano. Okay, maybe "playing" is a strong word. I
            mostly just noodle around on it until I get bored.{" "}
            <a className="expand-link" onClick={() => next()}>
              It's relaxing.
            </a>
          </>
        );
        break;
      case 6:
        update(
          <>
            Playing music on piano. Okay, maybe "playing" is a strong word. I
            mostly just noodle around on it until I get bored. It's relaxing.{" "}
            <a className="expand-link" onClick={() => next()}>
              Soothing, almost.
            </a>
          </>
        );
        break;
      case 7:
        update(
          <>
            Playing music on piano. Okay, maybe "playing" is a strong word. I
            mostly just noodle around on it until I get bored. It's relaxing.
            Soothing, almost. Really helps{" "}
            <a className="expand-link" onClick={() => next()}>
              blow off steam.
            </a>
          </>
        );
        break;
      case 8:
        update(
          <>
            Playing music on piano. Okay, maybe "playing" is a strong word. I
            mostly just noodle around on it until I get bored. It's relaxing.
            Soothing, almost. Really helps blow off steam. I'm no{" "}
            <a className="expand-link" onClick={() => next()}>
              Mozart
            </a>{" "}
            though.
          </>
        );
        break;
      case 9:
        update(
          <>
            Playing music on piano. Okay, maybe "playing" is a strong word. I
            mostly just noodle around on it until I get bored. It's relaxing.
            Soothing, almost. Really helps blow off steam. I'm no Mozart though.
            Mostly I just play the main{" "}
            <a className="expand-link" onClick={() => next()}>
              chords.
            </a>{" "}
          </>
        );
        break;
      case 10:
        update(
          <>
            Playing music on piano. Okay, maybe "playing" is a strong word. I
            mostly just noodle around on it until I get bored. It's relaxing.
            Soothing, almost. Really helps blow off steam. I'm no Mozart though.
            Mostly I just play the main chords, the{" "}
            <a className="expand-link" onClick={() => next()}>
              melody
            </a>{" "}
            is usually a lot more tricky to learn.
          </>
        );
        break;
      case 11:
        update(
          <>
            Playing music on piano. Okay, maybe "playing" is a strong word. I
            mostly just noodle around on it until I get bored. It's relaxing.
            Soothing, almost. Really helps blow off steam. I'm no Mozart though.
            Mostly I just play the main chords, the melody is usually a lot more
            tricky to learn. I also like{" "}
            <a className="expand-link" onClick={() => next()}>
              listening
            </a>{" "}
            to music.
          </>
        );
        break;
      case 12:
        update(
          <>
            Playing music on piano. Okay, maybe "playing" is a strong word. I
            mostly just noodle around on it until I get bored. It's relaxing.
            Soothing, almost. Really helps blow off steam. I'm no Mozart though.
            Mostly I just play the main chords, the melody is usually a lot more
            tricky to learn. I also like listening to music, especially{" "}
            <a className="expand-link" onClick={() => next()}>
              classic rock.
            </a>
          </>
        );
        break;
      case 13:
        update(
          <>
            Playing music on piano. Okay, maybe "playing" is a strong word. I
            mostly just noodle around on it until I get bored. It's relaxing.
            Soothing, almost. Really helps blow off steam. I'm no Mozart though.
            Mostly I just play the main chords, the melody is usually a lot more
            tricky to learn. I also like listening to music, especially classic
            rock. Anyways, go check out the{" "}
            <a className="expand-link" onClick={() => next()}>
              rest of the site.
            </a>
          </>
        );
        break;
      case 14:
        update(
          <>
            Playing music on piano. Okay, maybe "playing" is a strong word. I
            mostly just noodle around on it until I get bored. It's relaxing.
            Soothing, almost. Really helps blow off steam. I'm no Mozart though.
            Mostly I just play the main chords, the melody is usually a lot more
            tricky to learn. I also like listening to music, especially classic
            rock. Anyways, go check out the rest of the site,{" "}
            <a className="expand-link" onClick={() => next()}>
              please?
            </a>
          </>
        );
        break;
      case 15:
        update(
          <>
            Playing music on piano. Okay, maybe "playing" is a strong word. I
            mostly just noodle around on it until I get bored. It's relaxing.
            Soothing, almost. Really helps blow off steam. I'm no Mozart though.
            Mostly I just play the main chords, the melody is usually a lot more
            tricky to learn. I also like listening to music, especially classic
            rock. Anyways, go check out the rest of the site, please?{" "}
            <a className="expand-link" onClick={() => next()}>
              No?
            </a>
          </>
        );
        break;
      case 16:
        update(
          <>
            Playing music on piano. Okay, maybe "playing" is a strong word. I
            mostly just noodle around on it until I get bored. It's relaxing.
            Soothing, almost. Really helps blow off steam. I'm no Mozart though.
            Mostly I just play the main chords, the melody is usually a lot more
            tricky to learn. I also like listening to music, especially classic
            rock. Anyways, go check out the rest of the site, please? No? You{" "}
            <em>really</em> want to hear more about my{" "}
            <a className="expand-link" onClick={() => next()}>
              music tastes?
            </a>
          </>
        );
        break;
      case 17:
        update(
          <>
            Playing music on piano. Okay, maybe "playing" is a strong word. I
            mostly just noodle around on it until I get bored. It's relaxing.
            Soothing, almost. Really helps blow off steam. I'm no Mozart though.
            Mostly I just play the main chords, the melody is usually a lot more
            tricky to learn. I also like listening to music, especially classic
            rock. Anyways, go check out the rest of the site, please? No? You{" "}
            <em>really</em> want to hear more about my music tastes? Okay,{" "}
            <a className="expand-link" onClick={() => next()}>
              fine.
            </a>
          </>
        );
        break;
      case 18:
        update(
          <>
            Playing music on piano. Okay, maybe "playing" is a strong word. I
            mostly just noodle around on it until I get bored. It's relaxing.
            Soothing, almost. Really helps blow off steam. I'm no Mozart though.
            Mostly I just play the main chords, the melody is usually a lot more
            tricky to learn. I also like listening to music, especially classic
            rock. Anyways, go check out the rest of the site, please? No? You{" "}
            <em>really</em> want to hear more about my music tastes? Okay, fine.
            Here's a{" "}
            <a className="expand-link" onClick={() => next()}>
              list
            </a>{" "}
            of my favorite artists:
          </>
        );
        break;
      case 19:
        update(
          <>
            Playing music on piano. Okay, maybe "playing" is a strong word. I
            mostly just noodle around on it until I get bored. It's relaxing.
            Soothing, almost. Really helps blow off steam. I'm no Mozart though.
            Mostly I just play the main chords, the melody is usually a lot more
            tricky to learn. I also like listening to music, especially classic
            rock. Anyways, go check out the rest of the site, please? No? You{" "}
            <em>really</em> want to hear more about my music tastes? Okay, fine.
            Here's a list of my favorite artists/bands:
            <ul>
              <li>Led Zeppelin</li>
              <li>David Bowie</li>
              <li>Pink Floyd</li>
              <li>Billy Joel</li>
              <li>Cake</li>
              <li>Jimi Hendrix</li>
              <li>Paul Simon</li>
              <li>ELO</li>
              <li>Elton John</li>
              <li>The Beatles</li>
            </ul>
          </>
        );
        break;
    }
  }

  return current;
};

export default MusicInterest;
