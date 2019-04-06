# Pilot

[Pilot](http://wiki.xxiivv.com/Pilot) is a **UDP synthetiser** designed to be controlled externally. It was created as a companion application to the livecoding environment [ORCA](https://hundredrabbits.itch.io/orca). 

## Install & Run

You can download [builds](https://hundredrabbits.itch.io/pilot) for **OSX, Windows and Linux**, or if you wish to build it yourself, follow these steps:

```
git clone https://github.com/hundredrabbits/Pilot.git
cd Pilot/desktop/
npm install
npm start
```

## Commands

Pilot has 16 voices, 4 effects and 4 mastering filters. Commands can be entered directly with the input bar, or through UDP via the port `49161`. You can send multiple commands at once by using the `;` character. For example, `03C;13E` will play a `C3` and `E3` chord.

### Channel

#### Play

The Play commands allows you to play synth notes.

| Command  | Channel | Octave | Note | Velocity | Length |
| :-       | :-:     | :-:    | :-:  | :-:      | :-:    |
| `04C`    | 0       | 4      | C    | _64_     | _1/16_ |
| `04Cf`   | 0       | 4      | C    | 127      | _1/16_ |
| `04Cff`  | 0       | 4      | C    | 127      | 1bar   |

#### Settings

The Settings commands allow you to change the sound of the synth. The settings command format is a **channel** value between `0-G`, a 3 characters long **name**, followed by four values between `0-G`. The possible waveforms are `sin`, `si4`, `si8`, `squ`, `sq4`, `sq8`, `tri`, `tr4` and `tr8`.

| Command     | Channel | Name       | Info |
| :-          | :-      | :-         | :-   |                    
| `0ENV056f`  | 0       | Envelope   | Set **Attack**:0.00, **Decay**:0.33, **Sustain**:0.40 and **Release**:1.00 |
| `1WAVtri`  | 1        | Waveform   | Set **Waveform**:Triangle(TODO)  |
| `1MODsi8`  | 1        | Waveform   | Set **Waveform**:Sine8(TODO)     |

### Global

#### Effects

The Effects are applied to all channels. The effect command format is a 3 characters long **name**, followed by one values between `0-G` for **wet** and **depth**.

| Command     | Channel | Operation  | Info |
| :-          | :-      | :-         | :-   |
| `DISff`     | All     | Distortion | ..   |
| `CHOff`     | All     | Chorus     | ..   |
| `REVff`     | All     | Reverb     | ..   |
| `FEEff`     | All     | Feedback   | ..   |

#### Masters

The Masters are applied at the end of the effects. The effect command format is a 3 characters long **name**, followed by one value between `0-G`.

| Command     | Channel      | Operation  | Info |
| :-          | :-           | :-         | :-   |
| `EQUf`      | All          | Equalizer  | ..   | 
| `COMf`      | All          | Compressor | ..   | 
| `LIMf`      | All          | Limiter    | ..   | 
| `VOLf`      | All          | Volume     | ..   | 

## Convert OGG to MP3

Just use ffmpeg.

```
~/Documents/ffmpeg -i last.{ogg,mp3}  
```

## TODOs

- Implement the `wav` command.
- Implement note velocity.
- Improve ORCA example to demonstrate chords.
- Design icon.
- Push builds to Itch.
- Recycle Marabu into a UDP sequencer.
- Implement masters.
- Implement `clear` command.
- Draw TTF graphics for channels.
- Create instrument class.

## Extras

- This application supports the [Ecosystem Theme](https://github.com/hundredrabbits/Themes).
- Support this project through [Patreon](https://patreon.com/100).
- See the [License](LICENSE.md) file for license rights and limitations (MIT).
- Pull Requests are welcome!
