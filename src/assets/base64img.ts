const logo =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAAoCAMAAAABrwJ6AAAAgVBMVEUAAAAAqPMAqPMAqPMAqPMAqPMAqPMAqPMAqPMAqPMAqPMAqPMAqPMAqPMAqPMAqPMAqPMAqPMAqPMAqPMAqPMAqPMAqPMAqPMAqPMAqPMAqPMAqPMAqPMAqPMAqPMAqPMAqPMAqPMAqPMAqPMAqPMAqPMAqPMAqPMAqPMAqPMAqPPsfPl/AAAAKnRSTlMAu0Rm3ZnJj+8iF3cEzSwRVOedSTPCCauIf7az+MhwPBzUokzBX+GUGRUTP/jFAAACsUlEQVRYw+3XC3OaQBQF4LMPdAkQVksFH9Fo8zz//wcWVgRlxaRJMZ1OvslEHXXuGffei+LbvyTdiZ+nlirG9czu6BMzXMssIfPbU2vDBYbW1tcco+N+xQxXMRvx+ZZTdI2pMDxXf4mXMwEeBw7Q1l8AG+7QpYYN0J7/0n3c4+sGaOu7ypau4ez4QJ0LEEQ4JzM5PupmROa7fEsWKI3YiM8EoAAED1BL9XumRR9B6xf39Ho/efLgFr0BAseYtv5BgYrogEMd1TSPA7j9E77A0x8ATqLhZJp5Hal+OTua99YE0frBZ1RmNx2xFyAXgkYU1dvT8s8IVCLSwpGuRIv69GHrJIAb/yU9E68HNCtlivpuVBXV1DJKXX1j0osBtKppP8B85JnGF45AKqWkO/8kgqLOAEsT4mKAJKwlXoA+/U3oSOxZQxVQh7gcoPWZAKFsxzBCLSMpUrwRIJG1xA9gxx5/EdWFBJVru4IZnFRpGgV8JsCIvhiITqfAVPWtIEziFourbgPD1keP4F567t2Tc7S0yesmjGhhGbmRLpmgZvg3mzCOgc0GrbCZglSbULuhi5Ii8zeMH8AqdTyGStlOgJtGXX39MJksH+H4Y2hp2hZ8TwB26d5FlNTr1XlIe1ZxToM/CSBLVkeyJBJV/s96F9HYfRls4sQ9nwCZpz0BRI08uRopwwClgAzCN3pgwb3FlvNzAQqaTFDL8+1NT1VeN68Pc7JILwUIm4vrnBM0BMmguknc1ikOu9ebAl+qaSI0soSivRwH6HokR3fkHNKQaMggqC47URAqVDLZ/ZoUBeiRKZywR0ewQNealLibQrKEgYVcheiw5Pa1ylbB0HZ8+jWLjyEl+fS6YWWLofm/SucoSK7oWAxvPZqceJihCRXga8RTVlZzfJnNeLGY3+Lb/+43H0Vy3Js1UaYAAAAASUVORK5CYII='

const qr =
    'data:image/jpeg;base64,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'

const qr_logo =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAdVBMVEUAAAAwMTMwMTMwMTMwMTMwMTMwMTMwMTMwMTMwMTMwMTMwMTMwMTMwMTMwMTMwMTMwMTMwMTMwMTMwMTMwMTMwMTMwMTMwMTMwMTMwMTMwMTMwMTMwMTMwMTMwMTMwMTMwMTMwMTMwMTMwMTMwMTMwMTMwMTNzFkB/AAAAJnRSTlMA2CD1ZOy+jl3o38+wrKWclmBSSzcnC850cTwtFxQOBe63hjMbCvvKuAwAAAC6SURBVCjPnZBXFoMgEEUfiDH2XmNJnf0vMYhBiJ/eH4Z3zwwF53n1cRjGfXWI6wv9uNxgcSWL/JAbxD6HDuhpoQ4eHIUrVwZFtZ+LscTbkdWghKcFBxFT20yJVou5IYqQyqpVwtkuKYg3lICTJDCiwkB1Qx33jWCyivEk4gttbNdSQ721b4QWiRKlrHxMSWd+oIDivr5hgsmdBbpFwgKyG8wTDRl2MjtPYZH7OnYF/viIiLkui8SMs3wBlbIlyXGgz+QAAAAASUVORK5CYII='

export default {
    logo,
    qr,
    qr_logo,
}