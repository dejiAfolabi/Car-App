import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ArrowDropDown } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import Divider from '@mui/material/Divider';

function Contents() {
    return (
        <Box
            sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                p: 2,
            }}
        >
            <Box sx={{ marginTop: '50px' }}>
                <Typography
                    variant="body2"
                    sx={{
                        fontSize: '8px',
                        textAlign: 'center',
                        fontWeight: 'bold',
                    }}
                >
                    Find cars for sale and for rent near you
                </Typography>
                <Typography
                    variant="h5"
                    sx={{
                        fontSize: '35px',
                        textAlign: 'center',
                        fontWeight: 'bold',
                        marginTop: '15px',
                    }}
                >
                    Find Your Perfect Car
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 'bold',
                        marginTop: '10px',
                    }}
                >
                    <Typography sx={{ marginRight: '10px', fontWeight: 'bold' }}>
                        <u>All</u>
                    </Typography>
                    <Typography sx={{ marginRight: '10px', fontWeight: 'bold' }}>
                        New
                    </Typography>
                    <Typography sx={{ fontWeight: 'bold' }}>Used</Typography>
                </Box>
            </Box>

            {/* Search Box */}
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '550px',
                    height: '50px',
                    backgroundColor: '#fff',
                    marginTop: '20px',
                    borderRadius: '100px',
                    px: 3,
                }}
            >
                {/* Any Makes */}
                <Box sx={{ display: 'flex', alignItems: 'center', pr: 2 }}>
                    <Typography
                        variant="body2"
                        sx={{
                            fontSize: '12px',
                            color: '#000',
                            fontWeight: 'bold',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        Any Makes
                    </Typography>
                    <ArrowDropDown sx={{ color: '#000' }} />
                </Box>

                {/* Divider */}
                <Divider
                    orientation="vertical"
                    flexItem
                    sx={{ mx: 2, backgroundColor: '#ccc', height: '30px', marginTop: '10px' }}
                />

                {/* Any Models */}
                <Box sx={{ display: 'flex', alignItems: 'center', pr: 2 }}>
                    <Typography
                        variant="body2"
                        sx={{
                            fontSize: '12px',
                            color: '#000',
                            fontWeight: 'bold',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        Any Models
                    </Typography>
                    <ArrowDropDown sx={{ color: '#000' }} />
                </Box>
                <Divider
                    orientation="vertical"
                    flexItem
                    sx={{ mx: 2, backgroundColor: '#ccc', height: '30px', marginTop: '10px' }}
                />

                {/* Spacer to push button to end */}
                <Box sx={{ flexGrow: 1 }} />

                {/* Search Button */}
                <Button
                    variant="contained"
                    startIcon={<SearchIcon />}
                    sx={{
                        backgroundColor: '#1976d2',
                        color: '#fff',
                        fontWeight: 'bold',
                        textTransform: 'none',
                        borderRadius: '50px',
                        padding: '6px 20px',
                    }}
                >
                    Search Cars
                </Button>
            </Box>
        </Box>
    );
}

export default Contents;
