import React from 'react';

class BuahRow extends React.Component{
    render(){
        return(
            <>
                <tr>
                    <td>{this.props.nama}</td>
                    <td>{this.props.harga}</td>
                    <td>{this.props.berat}</td>
                </tr>
            </>
        )
    }
}


let dataHargaBuah = [
    {nama: "Semangka", harga: 10000, berat: 1000},
    {nama: "Anggur", harga: 40000, berat: 500},
    {nama: "Strawberry", harga: 30000, berat: 400},
    {nama: "Jeruk", harga: 30000, berat: 1000},
    {nama: "Mangga", harga: 30000, berat: 500}
  ]

class HargaBuah extends React.Component{
    render(){
        return(
            <>
                <div className="container-tugas11">
                    <h1>Tabel Harga Buah</h1>
                    <table className="tugas11">
                        <thead>
                            <tr>
                                <th>Nama</th>
                                <th>Harga</th>
                                <th>Berat</th>
                            </tr>
                        </thead>
                        <tbody>

                   
                {dataHargaBuah.map(buah=>{
                    return(
                        <BuahRow nama={buah.nama} harga={buah.harga} berat={`${buah.berat / 1000} kg`}  />
                    )
                })}
                    </tbody>
                    </table>
                </div>
            </>
        )
    }
}

export default HargaBuah