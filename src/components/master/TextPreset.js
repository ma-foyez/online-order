import { colors } from "../../theme/colors";
import { typography } from './../../theme/typography';

const BASE = {
    fontFamily: typography.regular,
    fontSize  : 16,
    color     : colors.black,
}

const BASE_BOLD = {
    fontFamily: typography.medium,
    fontSize  : 16,
    color     : colors.black,
}

const BOLD = {
    fontFamily: typography.bold,
    color     : colors.black,
}

export const presets = {
    default: BASE,
    bold   : BOLD,
    h1: {
        ...BOLD,
        fontSize: 32,
    },
    h2: {
        ...BOLD,
        fontSize: 28,
    },
    h3: {
        ...BASE_BOLD,
        fontSize: 24,
    },
    h4: {
        ...BASE_BOLD,
        fontSize: 18,
    },
    h5: {
        ...BASE_BOLD,
        fontSize: 16,
    },
    small: {
        ...BASE,
        fontSize: 10,
    },

}