import React, { Component } from 'react';

class TableBody extends Component {

    renderCell = (item, column) => {
        if (column.content) return column.content(item);
        return item[column.path];
    }

    render() {
        const { data, columns } = this.props
        return (
            <tbody>
                {data.map(item => (
                    <tr key={item.mid || item.bid}>
                        {columns.map(column => (
                            <td key={column.lable + column.path}>{this.renderCell(item, column)}</td>
                            // <td key={item.bid + column.path}>{_.get(item, column.path)}</td>
                            // <Link to={`/book/${item.bid}}`}>{item.bid}</Link>
                        ))}
                    </tr>
                ))}
            </tbody>
        );
    }
}

export default TableBody;